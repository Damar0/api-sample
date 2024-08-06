import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
//VS Code por default imporra path corto
//debemos cambiar la importacion corta
//por la importacion relatica de los archivos
//o dependencias de nuestro proyecto


@Module({
  providers: [TasksService],
  controllers: [TasksController]
})
export class TasksModule {}
