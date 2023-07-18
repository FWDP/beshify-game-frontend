import { UseFormTrigger } from "react-hook-form";

export type Room = {
  roomName: string;
  password: string;
  roomSize: string;
  timeToBeshify: number;
};

export interface FormInputProps {
  name: "roomName" | "password" | "roomSize" | "timeToBeshify";
  label: string;
  type?: string;
  rules?: Object;
  defaultValue?: string;
  trigger: UseFormTrigger<Room>;
  minLength: number;
  maxLength?: number;
}
