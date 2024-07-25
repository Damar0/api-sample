import { UpdateTaskDto } from './dto/update-task.dto';
export type Task = {
    id: number;
    date: Date;
    description: String;
    completed: boolean;
};
export declare class TasksService {
    private tasks;
    findAll(): Task[];
    createTask(task: Task): Task;
    updateTask(id: number, updateTaskDto: UpdateTaskDto): string;
    deleteTask(id: number): string;
    getTask(id: number): Task;
}
