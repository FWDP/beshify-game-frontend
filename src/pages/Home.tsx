import { SubmitHandler, useForm } from 'react-hook-form';
import { LiaGreaterThanSolid, LiaLessThanSolid } from 'react-icons/lia';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/dev-dino-blue.png';

import { User } from '../types';

const Home = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<User>();
	const navigate = useNavigate();
	const onSubmit: SubmitHandler<User> = (data) => {
		const targetButton = document.activeElement as HTMLButtonElement | null;

		if (targetButton?.id) {
			alert(`Welcome ${data.username}!`);
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
					<LiaLessThanSolid size={28} />
					<img
						className="w-[130px] mb-4"
						src={logo}
						alt="logo"
					/>
					<LiaGreaterThanSolid size={28} />
				</div>

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
