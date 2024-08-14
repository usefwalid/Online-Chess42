import { useState } from 'react';
import './landingpage1.css';

function Landingpage1({ createRoom, joinRoom }) {
    const [roomValue, setRoomValue] = useState('');
    const [isCopied, setIsCopied] = useState(false);

    const handleRoomChange = (e) => {
        setRoomValue(e.target.value);
    };

    const generateRandomHash = () => {
        return Math.random().toString(36).substring(2, 10); 
    };

    const handleSwitch = () => {
        const roomHash = generateRandomHash();
        
        navigator.clipboard.writeText(roomHash).then(() => {
        }).catch(err => {
            console.error('Could not copy text: ', err);
        });
        
        setIsCopied(true);
        setTimeout(() => {
            createRoom(roomHash);
        }, 2000);
    };

    const handleJoin = () => {
        joinRoom(roomValue);
    };

    return (
        <>
            <h1>Chess</h1>
            <div className='RoomManage'> 
                <button className='CreateRoom' onClick={handleSwitch}>Create Room</button>
                <br/>
                <div className='JoinRoom'>
                    <input
                        className='JoinRoomInput'
                        type="text"
                        value={roomValue}
                        onChange={handleRoomChange}
                        placeholder="Enter room ID"
                    />
                    <button className='joinRoomButton' type="submit" onClick={handleJoin}>Join Room</button>
                </div>
            </div>
            {isCopied && <div className="popup">Room name copied...</div>}
            {isCopied && <div className="popup">You will join room shortly.</div>}
        </>
    );
}

export default Landingpage1;
