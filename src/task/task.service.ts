import { Injectable } from '@nestjs/common';
import { TaskDTO } from './dto/task.dto';
import { ITask } from './task.interface';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class TaskService {
  task: ITask[] = [];
  create(taskDTO: TaskDTO): ITask {
    const task = {
      id: uuidv4(),
      ...taskDTO,
    };
    this.task.push(task);
    return task;
  }

  findAll(): ITask[] {
    return this.task;
  }

  findOne(id: string): ITask {
    const index = this.task.findIndex((item) => item.id === id);
    return this.task[index];
  }

  update(id: string, taskTDO: TaskDTO): ITask {
    const newTask = { id, ...taskTDO };
    console.log(id, taskTDO);
    this.task = this.task.map((item) => (item.id === id ? newTask : item));
    return newTask;
  }

  delete(id: string): ITask {
    const index = this.task.findIndex((item) => item.id === id);
    const oldTask = this.task[index];
    delete this.task[index];
    return oldTask;
  }
}
