import { Task } from "./tasks.types";

export interface Project {
  id: number;
  title: string;
  description: string;
  tasks: Task[] | [];
  createDate: string;
  lastModified: string | null;
  createdBy: number;
  lastModifiedBy: string | null;
}
