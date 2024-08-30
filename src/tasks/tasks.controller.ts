import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Task, TasksService } from '../tasks/tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService) {}

    @Get()
    async findAll(): Promise<Task[]> {
        return await this.tasksService.findAll();
    }

    // POST
    @Post()
    async createTask(@Body() newTask: CreateTaskDto): Promise<Task> {
        return await this.tasksService.create(newTask as unknown as Task);
    }

    // PUT
    @Put(':id')
    async updateTask(@Param('id') id: string, @Body() taskData: UpdateTaskDto): Promise<Task> {
        const result = await this.tasksService.update(parseInt(id), taskData);
        return result;  
    }
    // DELETE
    @Delete(':id')
    async deleteTask(@Param('id') id: string): Promise<{ message: string }> {
        await this.tasksService.remove(parseInt(id));
        return { message: `Tarea con ID ${id} eliminada exitosamente.` };
}
    // SHOW
    @Get(':id')
    async getTask(@Param('id') id: string): Promise<Task> {
        return await this.tasksService.findOne(parseInt(id));
    }
}
