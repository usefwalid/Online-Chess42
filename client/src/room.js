import { io } from 'socket.io-client';
import React, { useEffect, useState, useRef } from 'react';
import Game from './comp/game.js';
import './room.css';

function Room({ handleSwitchup, room }) {
  const [Alone, setAlone] = useState(false);
  const [myTurn, setMyTurn] = useState(false);
  const [socket, setSocket] = useState(null);
  const [MoveToSend, setMoveToSend] = useState({ piece: null, x: null, y: null });
  const UpdateBoard = useRef(null);  // Ensure default value is null

  const setMoves = (piece, x, y) => {
    setMoveToSend({ piece, x, y });
  };

  const switchTurn = () => {
    setMyTurn(false);
  };

  useEffect(() => {
    const newSocket = io('http://localhost:5000');
    setSocket(newSocket);
    newSocket.emit('join', room);

    newSocket.on('roomSize', (size) => {
      setAlone(size === 1);
      if (size === 1) {
        setMyTurn(true);
      }
    });

    newSocket.on('switchTurn', (piece) => {
      setMyTurn(true);

      if (UpdateBoard.current) {
        UpdateBoard.current.performMove(piece.piece,piece.x,piece.y);
      }
    });

    return () => {
      newSocket.disconnect();
    };
  }, [room]);

  useEffect(() => {
    if (socket && MoveToSend.piece !== null) {
      socket.emit('switchTurn', room, MoveToSend);
    }
  }, [MoveToSend, socket, room]);

  return (
    <>
      <h1>Chess Room</h1>
      <button className='LeaveRoom' onClick={handleSwitchup}>Leave Room</button>
      {Alone && <h3>Waiting for another player to join...</h3>}
      {!Alone && <Game ref={UpdateBoard} setMoves={setMoves} switchTurn={switchTurn} myTurn={myTurn} />}
    </>
  );
}

export default Room;
