import { UpdateProjectDto } from './dto/update-project.dto';
import { PrismaService } from 'src/prisma.service';
import { Prisma } from '@prisma/client';
export declare class ProjectsService {
    private database;
    constructor(database: PrismaService);
    create(projectData: Prisma.ProjectCreateInput): Promise<{
        id: number;
        name: string;
        description: string;
        status: import(".prisma/client").$Enums.Status;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateProjectDto: UpdateProjectDto): string;
    remove(id: number): string;
}
