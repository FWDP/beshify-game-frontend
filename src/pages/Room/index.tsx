import { useNavigate, useParams } from 'react-router-dom';

import UserAvatar from '../../components/Avatar/UserAvatar';
import ChatBox from '../../components/ChatBox';
import BackIcon from '../../components/Icons/BackIcon';
import { playerDetails } from '../../constants';

const Room = () => {
	const navigate = useNavigate();
	const { id } = useParams();

	return (
		<main className="m-8 my-11">
			<div className="grid grid-cols-7 gap-4">
				<div className="col-span-5">
					<div className="grid grid-cols-3">
						<div className="col-span-1 p-5 pr-3 ">
							<div className="relative flex justify-center ">
								<div className="avatar">
									<h1 className="absolute z-50 p-1 text-xl font-bold text-white bg-black rounded -left-5">
										Host
									</h1>
									<div className="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
										<img src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-PNG-File.png" />
									</div>
								</div>
							</div>
							<h1 className="my-2 text-lg font-semibold text-center border">
								Host name
							</h1>
						</div>
						<div className="relative flex items-center justify-center col-span-2">
							<button
								onClick={() => navigate('/lobby')}
								className="absolute top-0 p-3 border border-black rounded-full right-5 bg-gray-600/50"
							>
								<BackIcon />
							</button>
							<div>
								<h1 className="p-4 text-5xl font-bold text-center">
									Kapit🤸mga🤸beshy!{' '}
								</h1>
								<h1 className="font-bold text-center text-md">{id}</h1>
							</div>
						</div>
					</div>
					<div className="grid grid-cols-6 gap-2">
						{playerDetails.map((player) => (
							<div
								key={player.id}
								className="col-span-1 "
							>
								<UserAvatar
									username={player.username}
									avatar={player.avatar}
								/>
							</div>
						))}
					</div>
				</div>
				<div className="col-span-2">
					<ChatBox />
					<div className="flex mt-5 ">
						<button
							className="w-full font-bold text-white btn btn-success"
							onClick={() => navigate(`/beshify/${id}`)}
						>
							Game na!
						</button>
					</div>
				</div>
			</div>
		</main>
	);
};

export default Room;
