import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from '@prisma/client';

@Injectable()
export class TasksService {
  constructor(private database: PrismaService) {}

  async create(createTaskDto: CreateTaskDto): Promise<Task> {
    try {
      const newTask = await this.database.task.create({
        data: createTaskDto,
      });
      return newTask;
    } catch (error) {
      throw new Error(`Error al crear la tarea: ${error.message}`);
    }
  }

  // Obtener todas las tareas
  async findAll(): Promise<Task[]> {
    try {
      return await this.database.task.findMany();
    } catch (error) {
      throw new Error(`Error al recuperar tareas: ${error.message}`);
    }
  }

  // Obtener una tarea por ID
  async findOne(id: number): Promise<Task | null> {
    try {
      return await this.database.task.findUnique({
        where: { id },
      });
    } catch (error) {
      throw new Error(`Error al recuperar la tarea: ${error.message}`);
    }
  }

  // Actualizar una tarea por ID
  async update(id: number, updateTaskDto: UpdateTaskDto): Promise<Task> {
    try {
      return await this.database.task.update({
        where: { id },
        data: updateTaskDto,
      });
    } catch (error) {
      throw new Error(`Error al actualizar la tarea: ${error.message}`);
    }
  }

  // Eliminar una tarea por ID
  async remove(id: number): Promise<Task> {
    try {
      return await this.database.task.delete({
        where: { id },
      });
    } catch (error) {
      throw new Error(`Error al eliminar la tarea: ${error.message}`);
    }
  }
}
export { Task };

