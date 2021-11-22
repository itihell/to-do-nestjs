import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World desde nest.js a hora con wathc prt!';
  }
}
