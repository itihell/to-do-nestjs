import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  Req,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { timeStamp } from 'console';
import { query, Request } from 'express';
import { TaskDTO } from './dto/task.dto';
import { TaskService } from './task.service';

@Controller('api/v1/task')
export class TaskController {
  //Constructor
  constructor(private readonly taskService: TaskService) {}
  // Retornando todos las tareas
  @Get()
  index(@Query() query: any) {
    return this.taskService.findAll();
  }

  // Guardando una tarea
  @Post()
  @UsePipes(new ValidationPipe())
  store(@Body() taskDTO: TaskDTO) {
    return this.taskService.create(taskDTO);
  }

  @Get(':id')
  show(@Param('id') id: string) {
    return this.taskService.findOne(id);
  }
  @Put(':id')
  update(@Param('id') id: string, @Body() tasTDO: TaskDTO) {
    return this.taskService.update(id, tasTDO);
  }

  @Delete(':id')
  destroy(@Param('id') id: string) {
    return this.taskService.delete(id);
  }
}
