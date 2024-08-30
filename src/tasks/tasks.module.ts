import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { PrismaService } from '../prisma.service';
//VS Code por default imporra path corto
//debemos cambiar la importacion corta
//por la importacion relatica de los archivos
//o dependencias de nuestro proyecto


@Module({
  providers: [TasksService, PrismaService],
  controllers: [TasksController]
})
export class TasksModule {}
