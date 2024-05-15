import { Task } from "./Task";

export interface List {
  name: string;
  completed: boolean;
  tasks?: Task[];
}
