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
} from '@nestjs/common';
import { timeStamp } from 'console';
import { query, Request } from 'express';
import { TaskDTO } from './dto/task.dto';
import { TaskService } from './task.service';

@Controller('api/v1/task')
export class TaskController {
  //Constructor
  constructor(private readonly taskService: TaskService) {}
  // Enviando querys parametros
  @Get()
  index(@Query() query: any) {
    return this.taskService.findAll();
  }

  // Parametros por url
  @Post()
  store(@Body() taskDTO: TaskDTO) {
    return this.taskService.create(taskDTO);
  }

  @Get()
  show(@Req() req: Request) {
    return `method ${req.method}`;
  }
  @Put()
  update(@Req() req: Request) {
    return `method ${req.method}`;
  }

  @Delete()
  destroy(@Req() req: Request) {
    return `method ${req.method}`;
  }
}
