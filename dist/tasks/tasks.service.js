"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TasksService = void 0;
const common_1 = require("@nestjs/common");
let TasksService = class TasksService {
    constructor() {
        this.tasks = [
            {
                id: 1,
                date: new Date(),
                description: 'Crear Proyecto',
                completed: false
            },
            {
                id: 2,
                date: new Date(),
                description: 'Agregar módulo Tasks',
                completed: false
            },
            {
                id: 3,
                date: new Date(),
                description: 'Agregar controlador y servicio a módulo Tasks',
                completed: false
            }
        ];
    }
    findAll() {
        return this.tasks;
    }
    createTask(task) {
        const taskData = {
            id: this.tasks.length + 1,
            ...task
        };
        this.tasks.push(taskData);
        return taskData;
    }
    updateTask(id, updateTaskDto) {
        const taskToUpdate = this.tasks.find(task => task.id === id);
        if (!taskToUpdate) {
            return "No se encuentra la Task";
        }
        if (updateTaskDto.description !== undefined) {
            taskToUpdate.description = updateTaskDto.description;
        }
        if (updateTaskDto.date !== undefined) {
            taskToUpdate.date = updateTaskDto.date;
        }
        return "ok";
    }
    deleteTask(id) {
        const initialLength = this.tasks.length;
        this.tasks = this.tasks.filter(task => task.id !== id);
        if (this.tasks.length < initialLength) {
            return "Tarea eliminada";
        }
        else {
            return "No se encontró la tarea para eliminar";
        }
    }
    getTask(id) {
        return this.tasks.find((item) => item.id == id);
    }
};
exports.TasksService = TasksService;
exports.TasksService = TasksService = __decorate([
    (0, common_1.Injectable)()
], TasksService);
//# sourceMappingURL=tasks.service.js.map