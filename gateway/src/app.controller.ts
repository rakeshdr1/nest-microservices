import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  addNumbers(@Body('data') data: number[]) {
    return this.appService.addNumbers(data);
  }
}
