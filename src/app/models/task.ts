import { TaskUser } from './task-user'; 

export interface Task
{
    id: number;
    title: string;
    description: string;
    state: number;
    beginDate: string;
    deadline: string;
}