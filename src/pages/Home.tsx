/* eslint-disable @typescript-eslint/no-misused-promises */

import { useNavigate } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';

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
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className="text-3xl my-2 font-semibold">Ano🤸pangalan🤸mo🤸beshie?</h1>
        <div className="my-5">
          <input
            type="text"
            placeholder="Username"
            {...register('username', { required: true })}
            className="input input-bordered w-full text-center "
          />
          {errors.username && (
            <label className="label">
              <span className="label-text-alt text-red-500 text-center w-full">
                This field is required
              </span>
            </label>
          )}
        </div>
        <div className="flex flex-col gap-4 font-semibold">
          <button
            type="submit"
            id="create-room"
            className="btn-success text-white uppercase py-2 px-3 rounded"
          >
            Create Room
          </button>
          <button
            type="submit"
            id="lobby"
            className="btn-info text-white uppercase py-2 px-3 rounded"
          >
            Join Room
          </button>
        </div>
      </form>
    </main>
  );
};

export default Home;
