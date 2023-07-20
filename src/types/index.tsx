export type User = {
  username: string;
};

export type Room = {
  roomName: string;
  password: string;
  roomSize: string;
  timeLimit: number;
};

export type LobbyDetails = {
  roomId: string;
  avatar: string;
  roomName: string;
  roomSize: number;
  playerCount: number;
};

export type PlayerDetails = {
  id: string;
  username: string;
  avatar: string;
};
