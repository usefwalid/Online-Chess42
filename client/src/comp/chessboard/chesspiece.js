import { useEffect, useState } from "react";
import ShowAvailableMoves from './availableMoves';

function ChessPiece({piece,Locations2,performMove,myTurn,stoppit}) {
    
    const piece_pos={
        position:'absolute',
        fontSize:'55px',
        left: `${piece.position_x * 72 +30}px`,
        top: `${piece.position_y * 70 +10}px`,
    }
    const [Moves,setMoves] =  useState([]);
    
    const showmoves = ()=> {
        if(!myTurn){
            return;
        }
        if(Moves.length){
            setMoves([]);
            return;
        }
        
        if(piece.enemy){
            setMoves([]);
            return;
        }

        if(piece.name==='pawn'){
            if(piece.position_y===0){
                return;
            }
            if(Locations2.get(`${piece.position_x-1},${piece.position_y-1}`) && Locations2.get(`${piece.position_x-1},${piece.position_y-1}`).enemy){
                setMoves((prevMoves)=>[...prevMoves,`${piece.position_x-1},${piece.position_y-1}`]);
            }
            if(Locations2.get(`${piece.position_x+1},${piece.position_y-1}`) && Locations2.get(`${piece.position_x+1},${piece.position_y-1}`).enemy){
                setMoves((prevMoves)=>[...prevMoves,`${piece.position_x+1},${piece.position_y-1}`]);
            }

            if(Locations2.get(`${piece.position_x},${piece.position_y-1}`)){
                return;
            }
            setMoves((prevMoves)=>[...prevMoves,`${piece.position_x},${piece.position_y-1}`]);
        
            if(piece.position_y===6 && !Locations2.get(`${piece.position_x},${piece.position_y-2}`)){
                setMoves((prevMoves)=>[...prevMoves,`${piece.position_x},${piece.position_y-2}`]);
            }
            
        }
        else if(piece.name==='knight'){
            if(piece.position_x+1<8 && piece.position_y+2<8 && (!Locations2.get(`${piece.position_x+1},${piece.position_y+2}`) || Locations2.get(`${piece.position_x+1},${piece.position_y+2}`).enemy)){
                setMoves((prevMoves)=>[...prevMoves,`${piece.position_x+1},${piece.position_y+2}`]);
            }
            if(piece.position_x+2<8 && piece.position_y+1<8 && (!Locations2.get(`${piece.position_x+2},${piece.position_y+1}`) || Locations2.get(`${piece.position_x+2},${piece.position_y+1}`).enemy)){
                setMoves((prevMoves)=>[...prevMoves,`${piece.position_x+2},${piece.position_y+1}`]);
            }
            if(piece.position_x+2<8 && piece.position_y-1>=0 && (!Locations2.get(`${piece.position_x+2},${piece.position_y-1}`) || Locations2.get(`${piece.position_x+2},${piece.position_y-1}`).enemy)){
                setMoves((prevMoves)=>[...prevMoves,`${piece.position_x+2},${piece.position_y-1}`]);
            }
            if(piece.position_x+1<8 && piece.position_y-2>=0 && (!Locations2.get(`${piece.position_x+1},${piece.position_y-2}`) || Locations2.get(`${piece.position_x+1},${piece.position_y-2}`).enemy)){
                setMoves((prevMoves)=>[...prevMoves,`${piece.position_x+1},${piece.position_y-2}`]);
            }
            if(piece.position_x-1>=0 && piece.position_y-2>=0 && (!Locations2.get(`${piece.position_x-1},${piece.position_y-2}`) || Locations2.get(`${piece.position_x-1},${piece.position_y-2}`).enemy)){
                setMoves((prevMoves)=>[...prevMoves,`${piece.position_x-1},${piece.position_y-2}`]);
            }
            if(piece.position_x-2>=0 && piece.position_y-1>=0 && (!Locations2.get(`${piece.position_x-2},${piece.position_y-1}`) || Locations2.get(`${piece.position_x-2},${piece.position_y-1}`).enemy)){
                setMoves((prevMoves)=>[...prevMoves,`${piece.position_x-2},${piece.position_y-1}`]);
            }
            if(piece.position_x-2>=0 && piece.position_y+1<8 && (!Locations2.get(`${piece.position_x-2},${piece.position_y+1}`) || Locations2.get(`${piece.position_x-2},${piece.position_y+1}`).enemy)){
                setMoves((prevMoves)=>[...prevMoves,`${piece.position_x-2},${piece.position_y+1}`]);
            }
            if(piece.position_x-1>=0 && piece.position_y+2<8 && (!Locations2.get(`${piece.position_x-1},${piece.position_y+2}`) || Locations2.get(`${piece.position_x-1},${piece.position_y+2}`).enemy)){
                setMoves((prevMoves)=>[...prevMoves,`${piece.position_x-1},${piece.position_y+2}`]);
            }
        }
        if(piece.name==='rook'){
            for(let i=piece.position_x+1;i<8;i++){
                if(Locations2.get(`${i},${piece.position_y}`)){
                    if(Locations2.get(`${i},${piece.position_y}`).enemy){
                        setMoves((prevMoves)=>[...prevMoves,`${i},${piece.position_y}`]);
                    }
                    break;
                }
                setMoves((prevMoves)=>[...prevMoves,`${i},${piece.position_y}`]);
            }
            for(let i=piece.position_x-1;i>=0;i--){
                if(Locations2.get(`${i},${piece.position_y}`)){
                    if(Locations2.get(`${i},${piece.position_y}`).enemy){
                        setMoves((prevMoves)=>[...prevMoves,`${i},${piece.position_y}`]);
                    }
                    break;
                }
                setMoves((prevMoves)=>[...prevMoves,`${i},${piece.position_y}`]);
            }
            for(let i=piece.position_y+1;i<8;i++){
                if(Locations2.get(`${piece.position_x},${i}`)){
                    if(Locations2.get(`${piece.position_x},${i}`).enemy){
                        setMoves((prevMoves)=>[...prevMoves,`${piece.position_x},${i}`]);
                    }
                    break;
                }
                setMoves((prevMoves)=>[...prevMoves,`${piece.position_x},${i}`]);
            }
            for(let i=piece.position_y-1;i>=0;i--){
                if(Locations2.get(`${piece.position_x},${i}`)){
                    if(Locations2.get(`${piece.position_x},${i}`).enemy){
                        setMoves((prevMoves)=>[...prevMoves,`${piece.position_x},${i}`]);
                    }
                    break;
                }
                setMoves((prevMoves)=>[...prevMoves,`${piece.position_x},${i}`]);
            }
        }
        if(piece.name==='bishop'){
            for(let i=1;piece.position_x+i<8 && piece.position_y+i<8;i++){
                if(Locations2.get(`${piece.position_x+i},${piece.position_y+i}`)){
                    if(Locations2.get(`${piece.position_x+i},${piece.position_y+i}`).enemy){
                        setMoves((prevMoves)=>[...prevMoves,`${piece.position_x+i},${piece.position_y+i}`]);
                    }
                    break;
                }
                setMoves((prevMoves)=>[...prevMoves,`${piece.position_x+i},${piece.position_y+i}`]);
            }
            for(let i=1;piece.position_x-i>=0 && piece.position_y-i>=0;i++){
                if(Locations2.get(`${piece.position_x-i},${piece.position_y-i}`)){
                    if(Locations2.get(`${piece.position_x-i},${piece.position_y-i}`).enemy){
                        setMoves((prevMoves)=>[...prevMoves,`${piece.position_x-i},${piece.position_y-i}`]);
                    }
                    break;
                }
                setMoves((prevMoves)=>[...prevMoves,`${piece.position_x-i},${piece.position_y-i}`]);
            }
            for(let i=1;piece.position_x+i<8 && piece.position_y-i>=0;i++){
                if(Locations2.get(`${piece.position_x+i},${piece.position_y-i}`)){
                    if(Locations2.get(`${piece.position_x+i},${piece.position_y-i}`).enemy){
                        setMoves((prevMoves)=>[...prevMoves,`${piece.position_x+i},${piece.position_y-i}`]);
                    }
                    break;
                }
                setMoves((prevMoves)=>[...prevMoves,`${piece.position_x+i},${piece.position_y-i}`]);
            }
            for(let i=1;piece.position_x-i>=0 && piece.position_y+i<8;i++){
                if(Locations2.get(`${piece.position_x-i},${piece.position_y+i}`)){
                    if(Locations2.get(`${piece.position_x-i},${piece.position_y+i}`).enemy){
                        setMoves((prevMoves)=>[...prevMoves,`${piece.position_x-i},${piece.position_y+i}`]);
                    }
                    break;
                }
                setMoves((prevMoves)=>[...prevMoves,`${piece.position_x-i},${piece.position_y+i}`]);
            }
        }
        if(piece.name==='queen'){
            for(let i=piece.position_x+1;i<8;i++){
                if(Locations2.get(`${i},${piece.position_y}`)){
                    if(Locations2.get(`${i},${piece.position_y}`).enemy){
                        setMoves((prevMoves)=>[...prevMoves,`${i},${piece.position_y}`]);
                    }
                    break;
                }
                setMoves((prevMoves)=>[...prevMoves,`${i},${piece.position_y}`]);
            }
            for(let i=piece.position_x-1;i>=0;i--){
                if(Locations2.get(`${i},${piece.position_y}`)){
                    if(Locations2.get(`${i},${piece.position_y}`).enemy){
                        setMoves((prevMoves)=>[...prevMoves,`${i},${piece.position_y}`]);
                    }
                    break;
                }
                setMoves((prevMoves)=>[...prevMoves,`${i},${piece.position_y}`]);
            }
            for(let i=piece.position_y+1;i<8;i++){
                if(Locations2.get(`${piece.position_x},${i}`)){
                    if(Locations2.get(`${piece.position_x},${i}`).enemy){
                        setMoves((prevMoves)=>[...prevMoves,`${piece.position_x},${i}`]);
                    }
                    break;
                }
                setMoves((prevMoves)=>[...prevMoves,`${piece.position_x},${i}`]);
            }
            for(let i=piece.position_y-1;i>=0;i--){
                if(Locations2.get(`${piece.position_x},${i}`)){
                    if(Locations2.get(`${piece.position_x},${i}`).enemy){
                        setMoves((prevMoves)=>[...prevMoves,`${piece.position_x},${i}`]);
                    }
                    break;
                }
                setMoves((prevMoves)=>[...prevMoves,`${piece.position_x},${i}`]);
            }
            for(let i=1;piece.position_x+i<8 && piece.position_y+i<8;i++){
                if(Locations2.get(`${piece.position_x+i},${piece.position_y+i}`)){
                    if(Locations2.get(`${piece.position_x+i},${piece.position_y+i}`).enemy){
                        setMoves((prevMoves)=>[...prevMoves,`${piece.position_x+i},${piece.position_y+i}`]);
                    }
                    break;
                }
                setMoves((prevMoves)=>[...prevMoves,`${piece.position_x+i},${piece.position_y+i}`]);
            }
            for(let i=1;piece.position_x-i>=0 && piece.position_y-i>=0;i++){
                if(Locations2.get(`${piece.position_x-i},${piece.position_y-i}`)){
                    if(Locations2.get(`${piece.position_x-i},${piece.position_y-i}`).enemy){
                        setMoves((prevMoves)=>[...prevMoves,`${piece.position_x-i},${piece.position_y-i}`]);
                    }
                    break;
                }
                setMoves((prevMoves)=>[...prevMoves,`${piece.position_x-i},${piece.position_y-i}`]);
            }
            for(let i=1;piece.position_x+i<8 && piece.position_y-i>=0;i++){
                if(Locations2.get(`${piece.position_x+i},${piece.position_y-i}`)){
                    if(Locations2.get(`${piece.position_x+i},${piece.position_y-i}`).enemy){
                        setMoves((prevMoves)=>[...prevMoves,`${piece.position_x+i},${piece.position_y-i}`]);
                    }
                    break;
                }
                setMoves((prevMoves)=>[...prevMoves,`${piece.position_x+i},${piece.position_y-i}`]);
            }
            for(let i=1;piece.position_x-i>=0 && piece.position_y+i<8;i++){
                if(Locations2.get(`${piece.position_x-i},${piece.position_y+i}`)){
                    if(Locations2.get(`${piece.position_x-i},${piece.position_y+i}`).enemy){
                        setMoves((prevMoves)=>[...prevMoves,`${piece.position_x-i},${piece.position_y+i}`]);
                    }
                    break;
                }
                setMoves((prevMoves)=>[...prevMoves,`${piece.position_x-i},${piece.position_y+i}`]);
            }
        }
        if(piece.name==='king'){
            if(piece.position_x+1<8 && (!Locations2.get(`${piece.position_x+1},${piece.position_y}`) || Locations2.get(`${piece.position_x+1},${piece.position_y}`).enemy)){
                setMoves((prevMoves)=>[...prevMoves,`${piece.position_x+1},${piece.position_y}`]);
            }
            if(piece.position_x+1<8 && piece.position_y+1<8 && (!Locations2.get(`${piece.position_x+1},${piece.position_y+1}`) || Locations2.get(`${piece.position_x+1},${piece.position_y+1}`).enemy)){
                setMoves((prevMoves)=>[...prevMoves,`${piece.position_x+1},${piece.position_y+1}`]);
            }
            if(piece.position_y+1<8 && (!Locations2.get(`${piece.position_x},${piece.position_y+1}`) || Locations2.get(`${piece.position_x},${piece.position_y+1}`).enemy)){
                setMoves((prevMoves)=>[...prevMoves,`${piece.position_x},${piece.position_y+1}`]);
            }
            if(piece.position_x-1>=0 && piece.position_y+1<8 && (!Locations2.get(`${piece.position_x-1},${piece.position_y+1}`) || Locations2.get(`${piece.position_x-1},${piece.position_y+1}`).enemy)){
                setMoves((prevMoves)=>[...prevMoves,`${piece.position_x-1},${piece.position_y+1}`]);
            }
            if(piece.position_x-1>=0 && (!Locations2.get(`${piece.position_x-1},${piece.position_y}`) || Locations2.get(`${piece.position_x-1},${piece.position_y}`).enemy)){
                setMoves((prevMoves)=>[...prevMoves,`${piece.position_x-1},${piece.position_y}`]);
            }
            if(piece.position_x-1>=0 && piece.position_y-1>=0 && (!Locations2.get(`${piece.position_x-1},${piece.position_y-1}`) || Locations2.get(`${piece.position_x-1},${piece.position_y-1}`).enemy)){
                setMoves((prevMoves)=>[...prevMoves,`${piece.position_x-1},${piece.position_y-1}`]);
            }
            if(piece.position_y-1>=0 && (!Locations2.get(`${piece.position_x},${piece.position_y-1}`) || Locations2.get(`${piece.position_x},${piece.position_y-1}`).enemy)){
                setMoves((prevMoves)=>[...prevMoves,`${piece.position_x},${piece.position_y-1}`]);
            }
            if(piece.position_x+1<8 && piece.position_y-1>=0 && (!Locations2.get(`${piece.position_x+1},${piece.position_y-1}`) || Locations2.get(`${piece.position_x+1},${piece.position_y-1}`).enemy)){
                setMoves((prevMoves)=>[...prevMoves,`${piece.position_x+1},${piece.position_y-1}`]);
            }
        }
    }
    
    function performMove2(x , y){
        setMoves([]);
        if(piece.name==='pawn' && y==='0'){
            stoppit(piece ,x ,y);
            return;
        }    
        performMove(piece, x , y);
    }

  return (
    <>
        <div style={piece_pos}  onClick={showmoves}>
            {piece.symbol}
        </div>
        
        {Moves.length > 0 ? (
        (
            <div>
              {Moves.map((move) => (
                <ShowAvailableMoves
                Moves={move}
                performMove={performMove2}
                />
              ))}
            </div>
          )
        ) : null}
    
    </>
  );
}

export default ChessPiece;
