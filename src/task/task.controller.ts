import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
  Req,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { rejects } from 'assert';
import { timeStamp } from 'console';
import { query, Request } from 'express';
import { resolve } from 'path/posix';
import { setTimeout } from 'timers';
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
  store(@Body() taskDTO: TaskDTO) {
    return new Promise((resolve, rejects) => {
      setTimeout(() => rejects('Error en la petición'), 5000);
    });
    //throw new BadRequestException('Petición erronea');
    // throw new HttpException(
    //   'Error en la petición del servidor',
    //   HttpStatus.BAD_REQUEST,
    // );
    // return new Promise((resolve, rejects) => {
    //   setTimeout(() => rejects('Error en la petición'), 2000);
    // });
    //return this.taskService.create(taskDTO);
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
