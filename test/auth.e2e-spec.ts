import { PrismaService } from '../src/prisma.service';
import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { INestApplication } from '@nestjs/common';
import { AppModule } from '../src/app.module';

describe('TasksController (e2e)', () => {
  let app: INestApplication;
  let prismaService: PrismaService;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    prismaService = app.get(PrismaService);
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('/tasks (POST) debería crear una nueva tarea', async () => {
    const project = await prismaService.project.create({
      data: {
        name: 'Proyecto de prueba',
        description: 'Descripción del proyecto de prueba',
      },
    });

    const newTask = {
      name: 'Nueva tarea',
      description: 'Descripción de la nueva tarea',
      completed: false,
      projectId: project.id, 
    };

    const response = await request(app.getHttpServer())
      .post('/tasks')
      .send(newTask)
      .expect(201);

    expect(response.body).toMatchObject({
      name: newTask.name,
      description: newTask.description,
      completed: newTask.completed,
      projectId: project.id,
    });
  });
});
