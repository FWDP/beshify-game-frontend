import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { LobbyDetails } from '../types';

const RoomCard: React.FC<LobbyDetails> = ({ roomId, roomName, roomSize, playerCount, avatar }) => {
  const navigate = useNavigate();
  const isFull = roomSize === playerCount;

  const redirectToRoom = useCallback(() => {
    if (isFull) return;

    navigate(`/room/${roomId}`);
  }, [roomId, isFull]);

  return (
    <div
      onClick={redirectToRoom}
      className={`flex items-center justify-between p-4 mb-8 border border-black  rounded 
          ${isFull ? 'text-red-600' : 'text-black'} 
          ${isFull ? 'cursor-not-allowed' : 'cursor-pointer'}
      `}
    >
      <div className="flex flex-row items-center">
        <div className="avatar">
          <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={avatar} alt={roomName} />
          </div>
        </div>
        <h1 className="ml-5 text-xl font-semibold">{roomName}</h1>
      </div>
      <div>
        Players
        <span className="ml-2 text-lg font-bold">
          {playerCount}/{roomSize}
        </span>
      </div>
    </div>
  );
};
export default RoomCard;
