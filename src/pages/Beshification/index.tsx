import { useNavigate, useParams } from 'react-router-dom';

import { useCallback, useEffect, useState } from 'react';
import ChatBox from '../../components/ChatBox';
import BackIcon from '../../components/Icons/BackIcon';

const Beshification = () => {
	const navigate = useNavigate();
	const { id } = useParams();

	const [beshify, setBeshify] = useState('');
	const [playerCount, setPlayerCount] = useState(0);
	const [roomSize, setRoomSize] = useState(0);

	const onSaveBeshify = useCallback(() => {
		if (beshify.trim() === '') {
			alert('You forgot your beshify'); // will change to a toast message in the future
			return;
		}

		navigate(`/beshify/response/${id}`);
	}, [beshify]);

	const onChangeBeshy = useCallback(
		(event: React.ChangeEvent<HTMLTextAreaElement>) => {
			console.log(event.target.value);
			setBeshify(event.target.value);
		},
		[]
	);

	/**
	 * Fetch roomSize in DB using roomId
	 */
	useEffect(() => {
		console.log(id);
		setRoomSize(20);
	}, []);

	/**
	 * Just a mock up that players are joining the room
	 * Every .5 secs
	 */
	useEffect(() => {
		const playerJoining = setInterval(() => {
			if (playerCount < roomSize) {
				setPlayerCount((count) => (count += 1));
			}
		}, 500);

		return () => clearInterval(playerJoining);
	});

	return (
		<main className="m-8 my-11">
			<div className="grid grid-cols-7 gap-4">
				<div className="col-span-5">
					<div className="grid grid-cols-3">
						<div className="col-span-1 p-5 pr-3 ">
							<h1 className="text-3xl font-bold">0 0 : 4 4</h1>
						</div>
						<div className="relative flex items-center justify-center col-span-2">
							<button
								onClick={() => navigate('/')}
								className="absolute top-0 p-3 border border-black rounded-full right-5 bg-gray-600/50"
							>
								<BackIcon />
							</button>
						</div>
					</div>
					<div className="flex justify-center w-full mt-16">
						<div className="w-full mx-[150px]">
							<h1 className="text-5xl font-bold text-center">
								✨Start BESHIFYING!✨
							</h1>
							<textarea
								onChange={onChangeBeshy}
								className="w-full my-8 text-xl textarea textarea-bordered"
								placeholder="Type your text here..."
								value={beshify}
								rows={7}
							/>
							{playerCount < roomSize ? (
								<>
									<h1 className="text-center">
										Wait🤸muna🤸natin🤸ibang🤸mga🤸beshie...
									</h1>
									<h1 className="w-full text-center">
										{playerCount}/{roomSize}
									</h1>
								</>
							) : (
								<div className="flex justify-center w-full">
									<button
										onClick={onSaveBeshify}
										className="font-extrabold text-white btn btn-success"
									>
										GORA NA ‘YAN, BESHIE! 🤸
									</button>
								</div>
							)}
						</div>
					</div>
				</div>
				<div className="col-span-2">
					<ChatBox />
				</div>
			</div>
		</main>
	);
};

export default Beshification;
