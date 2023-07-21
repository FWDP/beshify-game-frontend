import { IoMdSend } from 'react-icons/io';

const ChatBox = () => {
  return (
    <div className="p-4 border border-black rounded ">
      <div className="h-[500px] relative">
        <div className="form-control w-full absolute bottom-0 rounded ">
          <div className="input-group w-full">
            <input
              type="text"
              placeholder="How are you beshy?"
              className="input input-bordered w-full  border-black "
            />
            <button className=" bg-transparent border border-black px-3">
              <IoMdSend className="text-primary  text-2xl" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
