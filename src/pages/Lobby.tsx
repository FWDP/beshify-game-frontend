import { useState, useCallback } from 'react';
import { BsSearch } from 'react-icons/bs';

import RoomCard from '../components/RoomCard';
import { LobbyDetails } from '../types';
import { roomData as defaultRoomData } from '../constants';

const Lobby = () => {
  const [roomData, setRoomData] = useState<LobbyDetails[]>([...defaultRoomData]);

  const onSearchRoomName = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const roomNameQuery = event.target.value.trim().toLowerCase();
    const filteredRoomName = roomData.filter((room) =>
      room.roomName.toLowerCase().includes(roomNameQuery)
    );

    setRoomData(filteredRoomName);
  }, []);

  return (
    <main className="flex items-center justify-center mt-5">
      <div className="w-[500px]">
        <h1 className="my-5 text-3xl font-bold text-center uppercase">✨JOIN ROOM✨</h1>
        <div className="my-4 form-control">
          <label className="input-group">
            <span>
              <BsSearch />
            </span>
            <input
              type="text"
              placeholder="Search Room Name"
              className="w-full input input-bordered"
              onChange={onSearchRoomName}
            />
          </label>
        </div>
        {/* Just a draft */}
        {roomData.length > 0 ? (
          <div className="p-2 overflow-y-scroll max-h-96">
            {roomData.map((room) => (
              <RoomCard
                key={room.roomId}
                roomId={room.roomId}
                playerCount={room.playerCount}
                roomName={room.roomName}
                roomSize={room.roomSize}
                avatar={room.avatar}
              />
            ))}
          </div>
        ) : (
          <h1 className="text-lg font-semibold text-center">
            There are no rooms yet, come back later!
          </h1>
        )}
      </div>
    </main>
  );
};

export default Lobby;
