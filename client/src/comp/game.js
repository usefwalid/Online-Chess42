import React, { useState, forwardRef, useImperativeHandle, useEffect} from 'react';
import './chessboard/chessboard.css';
import InitialPositions from '../pieces';
import ChessPiece from './chessboard/chesspiece';
import Locations from '../locations';
import ReplacePawn from './replacePawn';

const Game = forwardRef(({ setMoves, switchTurn, myTurn }, ref) => {

  const [InitialPositions2, setInitialPositions] = useState(InitialPositions);
  const [Locations2, setLocations] = useState(Locations);
  const [PauseGame,setPauseGame] = useState(false);
  const [PieceToReplace, setPieceToReplace] = useState(null);

 useEffect(() => {
    if (PieceToReplace!==null && PieceToReplace.piece.name!=='pawn'){ 
        setPauseGame(false);
        performMove(PieceToReplace.piece,PieceToReplace.x,PieceToReplace.y);
        setPieceToReplace(null);
    }
    }, [PieceToReplace]);
 

  const performMove = (piece, x, y) => {
    
    x = parseInt(x);
    y = parseInt(y);
    if (Locations2.get(`${x},${y}`)) {
        setInitialPositions((prev) =>
          prev.filter((piece2) => piece2.position_x !== x || piece2.position_y !== y)
        );
        setLocations((prev) => new Map([...prev].filter(([key]) => key !== `${x},${y}`)));
      }
    
      setInitialPositions((prev) =>
        prev.map((piece2) =>
            piece2.id === piece.id
                ? { 
                    ...piece2, 
                    position_x: x, 
                    position_y: y,
                    name: piece.name,
                    symbol: piece.symbol,
                  }
                : piece2
        )
    );

    setLocations((prev) => {
      const newMap = new Map(prev);
      newMap.delete(`${piece.position_x},${piece.position_y}`);
      newMap.set(`${x},${y}`, piece);
      return newMap;
    });
    

    if (piece.enemy) {
      return;
    }
    setMoves(piece, x, y);
    switchTurn();
  };

  useImperativeHandle(ref, () => ({
    performMove,
  }));

  const stoppit=(piece,x,y)=>{
    setPauseGame(true)
    setPieceToReplace({piece:piece,x:x,y:y})
  }

  const newPawnSymbolandName=(symbol,name)=>{
    setPieceToReplace((prev) => ({
        ...prev,
        piece: {
            ...prev.piece,
            symbol: symbol,
            name: name
        }
    }));
 }


 

  

  return (
    <>
        <div className='roomcontrol'>
            {myTurn && (
                <h2>your turn</h2>
            )}
            {!myTurn && (
                <h2>your opponent's turn</h2>
            )}
        </div>
      {!PauseGame && 
      (<div className='chess'>
        {InitialPositions2.filter((piece) => piece.alive).map((piece) => (
          <ChessPiece
            key={piece.id}
            piece={piece}
            performMove={performMove}
            Locations2={Locations2}
            myTurn={myTurn}
            stoppit = {stoppit}
          />
        ))}
      </div>)}
        {PauseGame && <ReplacePawn  newPawnSymbolandName={newPawnSymbolandName} />}

     
      
    </>
  );
});

export default Game;
