import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { LiaGreaterThanSolid, LiaLessThanSolid } from 'react-icons/lia';
import { useNavigate } from 'react-router-dom';
import { User } from '../../types';

import devDinoBlue from '../../assets/devDinoBlue.png';
import devDinoPink from '../../assets/devDinoPink.png';
import dinoBlue from '../../assets/dinoBlue.png';
import dinoPink from '../../assets/dinoPink.png';

const Home = () => {
	const avatarList = [devDinoBlue, devDinoPink, dinoBlue, dinoPink];
	const [avatar, setAvatar] = useState(avatarList[0]);

	const navigate = useNavigate();

	useEffect(() => {
		if (!!localStorage.getItem('username') && !!localStorage.getItem('avatar'))
			navigate('/lobby');
	}, [navigate]);

	const handleSetAvatarForward = () => {
		avatarList.indexOf(avatar) < avatarList.length - 1
			? setAvatar(avatarList[avatarList.indexOf(avatar) + 1])
			: setAvatar(avatarList[0]);
	};

	const handleSetAvatarBackward = () => {
		avatarList.indexOf(avatar) > 0
			? setAvatar(avatarList[avatarList.indexOf(avatar) - 1])
			: setAvatar(avatarList[avatarList.length - 1]);
	};

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<User>();

	const onSubmit: SubmitHandler<User> = (data) => {
		const targetButton = document.activeElement as HTMLButtonElement | null;
		if (targetButton?.id) {
			const selectedAvatar = avatar
				.replace('/src/assets/', '')
				.replace('.png', '');
			alert(`Welcome ${data.username}!`);

			//TODO: POST username and avatar

			localStorage.setItem('username', data.username);
			localStorage.setItem('avatar', selectedAvatar);

			navigate(targetButton.id);
		}
	};

	return (
		<main className="flex items-center justify-center h-[80vh]">
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="flex flex-col items-center justify-center"
			>
				<h1 className="my-2 mb-12 text-3xl font-semibold">
					Ano🤸pangalan🤸mo🤸beshie?
				</h1>
				<div className="flex items-center gap-8">
					<LiaLessThanSolid
						className="cursor-pointer"
						size={28}
						onClick={handleSetAvatarBackward}
					/>
					<img
						className="w-[130px] h-[130px] mb-2"
						src={avatar}
						alt="logo"
					/>
					<LiaGreaterThanSolid
						className="cursor-pointer"
						size={28}
						onClick={handleSetAvatarForward}
					/>
				</div>
				<p className="mb-2 text-sm font-lightbold">Select Avatar</p>

				<input
					type="text"
					placeholder="Username"
					{...register('username', { required: true })}
					className="w-full text-center input input-bordered "
				/>
				<label className="label">
					{errors.username ? (
						<span className="w-full my-1 text-center text-red-500 label-text-alt">
							This field is required
						</span>
					) : (
						<span className="my-1"></span>
					)}
				</label>

				<button
					type="submit"
					id="create-room"
					className="w-48 px-3 py-2 mb-4 font-black text-white uppercase rounded btn-success"
				>
					Create Room
				</button>

				<button
					type="submit"
					id="lobby"
					className="w-48 px-3 py-2 font-black text-white uppercase rounded btn-info"
				>
					Join Room
				</button>
			</form>
		</main>
	);
};

export default Home;
