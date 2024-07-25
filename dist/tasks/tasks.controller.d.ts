import { Task, TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
export declare class TasksController {
    private tasksService;
    constructor(tasksService: TasksService);
    findAll(): Task[];
    createTask(newTask: CreateTaskDto): Task;
    updateTask(id: string, taskData: UpdateTaskDto): string;
    deleteTask(id: string): string;
    getTask(id: string): Task;
}
