import { Injectable } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { PrismaService } from 'src/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class ProjectsService {
  //pasar una instancia de la conexión a la bd: database
  constructor ( private database: PrismaService ){}

  //modificar create() para registrar un proyecto
/* 
create(createProjectDto: CreateProjectDto) {
    return 'This action adds a new project';
  }*/
  async create(projectData: Prisma.ProjectCreateInput) {
    return this.database.project.create({
      data: projectData
    })
  }

  findAll() {
    return `This action returns all projects`;
  }

  findOne(id: number) {
    return `This action returns a #${id} project`;
  }

  update(id: number, updateProjectDto: UpdateProjectDto) {
    return `This action updates a #${id} project`;
  }

  remove(id: number) {
    return `This action removes a #${id} project`;
  }
}
