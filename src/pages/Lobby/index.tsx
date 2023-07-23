import { useCallback, useEffect, useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { RiArrowGoBackFill } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';
import { roomData as defaultRoomData } from '../../constants';
import { LobbyDetails } from '../../types';
import RoomCard from './components/RoomCard';

const Lobby = () => {
	const [roomData, setRoomData] = useState<LobbyDetails[]>([
		...defaultRoomData,
	]);

	const navigate = useNavigate();
	const handleNavigateCreateRoom = () => navigate('/create-room');

	useEffect(() => {
		const verifyUsername = !!!localStorage.getItem('username');
		const verifyAvatar = !!!localStorage.getItem('avatar');
		if (verifyUsername && verifyAvatar) {
			navigate('/');
		}
	}, [navigate]);

	const onSearchRoomName = useCallback(
		(event: React.ChangeEvent<HTMLInputElement>) => {
			const roomNameQuery = event.target.value.trim().toLowerCase();
			const filteredRoomName = roomData.filter((room) =>
				room.roomName.toLowerCase().includes(roomNameQuery)
			);

			setRoomData(filteredRoomName);
		},
		[]
	);

	return (
		<main className="relative flex items-center justify-center mt-5">
			<button
				className="absolute w-40 py-2 mb-4 font-black text-white uppercase rounded px-38 top-2 left-12 btn-success"
				onClick={handleNavigateCreateRoom}
			>
				CREATE ROOM
			</button>
			<div className="w-[500px] ">
				<RiArrowGoBackFill
					onClick={() => window.history.back()}
					className="absolute rounded-full cursor-pointer right-10 bg-[#D9D9D9] p-1"
					size={32}
				/>
				<h1 className="my-5 text-3xl font-bold text-center uppercase">
					✨JOIN ROOM✨
				</h1>
				<div className="my-4 form-control">
					<label className="relative">
						<input
							type="text"
							placeholder="Search Room Name"
							className="w-full pl-10 input input-bordered border-[#616060]"
							onChange={onSearchRoomName}
						/>
						<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
							<BsSearch />
						</div>
					</label>
				</div>
				{/* Just a draft */}
				{roomData.length > 0 ? (
					<div className="pr-1 overflow-y-scroll max-h-96 custom-scroll">
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
