import { Task } from "./Task";

export interface List {
  id: string;
  name: string;
  completed: boolean;
  tasks?: Task[];
}
