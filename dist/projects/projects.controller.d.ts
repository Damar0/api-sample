import { ProjectsService } from './projects.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
export declare class ProjectsController {
    private readonly projectsService;
    constructor(projectsService: ProjectsService);
    create(createProjectDto: CreateProjectDto): Promise<{
        id: number;
        name: string;
        description: string;
        status: import(".prisma/client").$Enums.Status;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateProjectDto: UpdateProjectDto): string;
    remove(id: string): string;
}
