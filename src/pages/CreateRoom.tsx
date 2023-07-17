import { useForm } from "react-hook-form";

const CreateRoom = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = handleSubmit((d) => console.log(d));

  return (
    <div className="flex justify-center">
      {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
      <form onSubmit={onSubmit} className="text-center">
        <h1 className="font-bold text-3xl m-8">CREATE ROOM</h1>
        <label className="flex flex-col">
          ✨Room🤸name🤸ng🤸mga🤸beshie✨
          <input
            type="text"
            placeholder="Room Name"
            className="input input-bordered input-sm w-full max-w-xs my-3"
            {...register("roomName")}
          />
        </label>
        <label className="flex flex-col">
          ✨Password✨
          <input
            type="password"
            placeholder="Password"
            className="input input-bordered input-sm w-full max-w-xs my-3"
            {...register("password")}
          />
        </label>
        <label className="flex flex-col">
          ✨Room Size✨
          <input
            type="text"
            placeholder="Room Size"
            className="input input-bordered input-sm w-full max-w-xs my-3"
            {...register("roomSize")}
          />
        </label>
        <label className="flex flex-col">
          ✨Time🤸to🤸beshify✨
          <input
            type="date"
            placeholder="Date"
            className="input input-bordered input-sm w-full max-w-xs my-3"
            {...register("roomSize")}
          />
        </label>

        <button type="submit" className="btn btn-success text-white">
          PLAY NA!
        </button>
      </form>
    </div>
  );
};

export default CreateRoom;
