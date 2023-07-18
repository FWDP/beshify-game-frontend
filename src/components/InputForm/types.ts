import { UseFormTrigger } from "react-hook-form";

export type Room = {
  roomName: string;
  password: string;
  roomSize: string;
  timeLimit: number;
};

export interface FormInputProps {
  name: "roomName" | "password" | "roomSize" | "timeLimit";
  label: string;
  type?: string;
  rules?: Object;
  defaultValue?: string;
  trigger: UseFormTrigger<Room>;
  minLength: number;
  maxLength?: number;
}
