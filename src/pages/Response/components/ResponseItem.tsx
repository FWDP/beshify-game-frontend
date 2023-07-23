type TProps = {
  response: {
    id: number;
    username: string;
    message: string;
  };
};

const ResponseItem: React.FC<TProps> = ({ response }) => {
  return (
    <div className="h-[250px] p-4 bg-gray-50 border shadow-sm rounded flex flex-col">
      {/* Username Container */}
      <div>
        <span className="text-lg font-bold">{response.username}</span>
      </div>
      {/* Beshified Text Container */}
      <div className="flex-grow">
        <span className="text-md">{response.message}</span>
      </div>
      {/* Actions Container */}
      <div className="justify-end self-end flex flex-row gap-2">
        <button className="bg-gray-200 h-10 w-10 rounded-full aspect-square">
          🤸🏽
        </button>
        <button className="bg-gray-200 h-10 w-10 rounded-full aspect-square">
          ✨
        </button>
        <button className="bg-gray-200 h-10 w-10 rounded-full aspect-square">
          ❌
        </button>
      </div>
    </div>
  );
};

export default ResponseItem;
