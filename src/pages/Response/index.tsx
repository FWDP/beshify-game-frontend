import ChatBox from "../../components/ChatBox";
import ResponseItem from "./components/ResponseItem";

const Response = () => {
  return (
    <div className="h-[calc(100vh-74px)] grid grid-cols-3 p-1 mx-40">
      <div className="col-span-2 grid grid-flow-row grid-cols-2 gap-4 overflow-y-auto p-10 relative">
        {DUMMY_RESPONSES.map((response) => (
          <ResponseItem key={response.id} response={response} />
        ))}
      </div>
      <div className="p-5 row-span-2">
        <ChatBox />
      </div>
      {/* Voting Timer Container */}
      <div className="col-span-2 p-5">
        <span className="text-lg font-bold block">Voting Timer</span>
        <div className="flex flex-row">
          <div className="bg-black text-white text-3xl p-1 rounded font-bold">
            <span>00</span>
          </div>
          <span className="text-3xl font-bold">:</span>
          <div className="bg-black text-white text-3xl p-1 rounded font-bold">
            <span>00</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Response;

const DUMMY_RESPONSES = [
  {
    id: 1,
    username: "Beshy1",
    message: "Hello🤸🏽Beshy!",
  },
  {
    id: 2,
    username: "Beshy2",
    message: "What's🤸🏽up🤸🏽Beshy!",
  },
  {
    id: 3,
    username: "Beshy3",
    message: "Good🤸🏽morning🤸🏽Beshy!",
  },
  {
    id: 4,
    username: "Beshy4",
    message:
      "Hey🤸🏽Beshy,🤸🏽have🤸🏽you🤸🏽tried🤸🏽out🤸🏽the🤸🏽new🤸🏽VS🤸🏽Code🤸🏽extension?🤸🏽",
  },
  {
    id: 5,
    username: "Beshy5",
    message: "Hi🤸🏽Beshy,🤸🏽what's🤸🏽your🤸🏽favorite🤸🏽programming🤸🏽language?🤸🏽",
  },
  {
    id: 6,
    username: "Beshy6",
    message:
      "What's🤸🏽good🤸🏽Beshy,🤸🏽have🤸🏽you🤸🏽seen🤸🏽the🤸🏽latest🤸🏽tech🤸🏽news?🤸🏽",
  },
  {
    id: 7,
    username: "Beshy7",
    message:
      "Hey🤸🏽Beshy,🤸🏽do🤸🏽you🤸🏽have🤸🏽any🤸🏽exciting🤸🏽projects🤸🏽you're🤸🏽working🤸🏽on?🤸🏽",
  },
  {
    id: 8,
    username: "Beshy8",
    message: "Good🤸🏽afternoon🤸🏽Beshy,🤸🏽how's🤸🏽your🤸🏽day🤸🏽been🤸🏽so🤸🏽far?🤸🏽",
  },
  {
    id: 9,
    username: "Beshy9",
    message:
      "What's🤸🏽up🤸🏽Beshy,🤸🏽have🤸🏽you🤸🏽tried🤸🏽out🤸🏽the🤸🏽new🤸🏽CSS🤸🏽framework?🤸🏽",
  },
  {
    id: 10,
    username: "Beshy10",
    message: "Hey🤸🏽Beshy,🤸🏽what's🤸🏽your🤸🏽favorite🤸🏽coding🤸🏽playlist?🤸🏽",
  },
  {
    id: 11,
    username: "Beshy5",
    message: "Hi🤸🏽Beshy,🤸🏽what's🤸🏽your🤸🏽favorite🤸🏽programming🤸🏽language?🤸🏽",
  },
  {
    id: 12,
    username: "Beshy6",
    message:
      "What's🤸🏽good🤸🏽Beshy,🤸🏽have🤸🏽you🤸🏽seen🤸🏽the🤸🏽latest🤸🏽tech🤸🏽news?🤸🏽",
  },
  {
    id: 13,
    username: "Beshy7",
    message:
      "Hey🤸🏽Beshy,🤸🏽do🤸🏽you🤸🏽have🤸🏽any🤸🏽exciting🤸🏽projects🤸🏽you're🤸🏽working🤸🏽on?🤸🏽",
  },
  {
    id: 14,
    username: "Beshy8",
    message: "Good🤸🏽afternoon🤸🏽Beshy,🤸🏽how's🤸🏽your🤸🏽day🤸🏽been🤸🏽so🤸🏽far?🤸🏽",
  },
  {
    id: 15,
    username: "Beshy9",
    message:
      "What's🤸🏽up🤸🏽Beshy,🤸🏽have🤸🏽you🤸🏽tried🤸🏽out🤸🏽the🤸🏽new🤸🏽CSS🤸🏽framework?🤸🏽",
  },
];
