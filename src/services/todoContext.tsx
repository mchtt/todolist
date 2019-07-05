import { createContext } from "react";

export type Action =
  | { type: "ADD"; text: string }
  | { type: "DELETE"; id: number }
  | { type: "DONE"; id: number }
  | { type: "DARKMODE"; mode: boolean }
  | { type: "REVERSE" };

export interface ITodos {
  text: string;
  complete: boolean;
}

const initialState: ITodos[] = [];

export const DispatchContext = createContext<React.Dispatch<Action>>(() => 0);
export const TodoContext = createContext(initialState);
