import { useNavigate, useParams } from 'react-router-dom';

import BackIcon from '../components/BackIcon';
import { playerDetails } from '../constants';
import UserAvatar from '../components/UserAvatar';

const Room = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <main className="m-8 my-11">
      <div className="grid grid-cols-7 gap-4">
        <div className="col-span-5">
          <div className="grid grid-cols-3">
            <div className="col-span-1 p-5 pr-3 ">
              <div className="flex justify-center relative ">
                <h1 className="text-xl z-50 font-bold bg-black text-white absolute p-1 rounded left-8">
                  Host
                </h1>
                <div className="avatar">
                  <div className="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-PNG-File.png" />
                  </div>
                </div>
              </div>
              <h1 className="text-lg font-semibold text-center border my-2">Host name</h1>
            </div>
            <div className="col-span-2  flex justify-center items-center relative">
              <button
                onClick={() => navigate('/')}
                className="border border-black p-3 absolute top-0 right-5 rounded-full bg-gray-600/50"
              >
                <BackIcon />
              </button>
              <div className="">
                <h1 className="text-5xl font-bold  p-4  text-center">Kapit🤸mga🤸beshy! </h1>
                <h1 className="text-md font-bold  text-center">{id}</h1>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-6 gap-2">
            {playerDetails.map((player) => (
              <div key={player.id} className=" col-span-1">
                <UserAvatar username={player.username} avatar={player.avatar} />
              </div>
            ))}
          </div>
        </div>
        <div className="col-span-2">
          <div className="border border-black rounded h-[500px]">Chat</div>
        </div>
      </div>
    </main>
  );
};

export default Room;
