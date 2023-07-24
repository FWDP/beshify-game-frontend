import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { LiaGreaterThanSolid, LiaLessThanSolid } from 'react-icons/lia';
import { useNavigate } from 'react-router-dom';
import { User } from '../../types';

import Button from '../../components/Buttons';

import devDinoBlue from '../../assets/devDinoBlue.png';
import devDinoPink from '../../assets/devDinoPink.png';
import dinoBlue from '../../assets/dinoBlue.png';
import dinoPink from '../../assets/dinoPink.png';

export default function Home() {
	const avatarList = [devDinoBlue, devDinoPink, dinoBlue, dinoPink];
	const [avatar, setAvatar] = useState(avatarList[0]);
	const [isLoading, setIsLoading] = useState(false);

	const { register, handleSubmit, formState } = useForm<User>();
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

	const onSubmit: SubmitHandler<User> = async (data) => {
		const targetButton = document.activeElement as HTMLButtonElement | null;
		if (targetButton?.id) {
			const selectedAvatar = avatar
				.replace('/src/assets/', '')
				.replace('.png', '');

			setIsLoading(true);
			setTimeout(() => {
				// setConfirmModal(true);

				//? alert(`Welcome ${data.username}!`);
				//TODO: POST username and avatar

				localStorage.setItem('username', data.username);
				localStorage.setItem('avatar', selectedAvatar);

				setIsLoading(false);
				navigate(targetButton.id);
			}, 800);
			// setConfirmModal(false);
		}
	};

	return (
		<>
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
						{formState.errors.username ? (
							<span className="w-full my-1 text-center text-red-500 label-text-alt">
								This field is required
							</span>
						) : (
							<span className="my-1"></span>
						)}
					</label>

					<div className="container flex justify-center mx-auto ">
						<Button
							type="submit"
							id="lobby"
							disabled={isLoading}
							loading={isLoading}
						>
							Enter
						</Button>
					</div>
				</form>
			</main>
		</>
	);
}
