import { Controller, Get } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern('add')
  addNumbers(data: number[]): number {
    console.log(data);
    return (data || []).reduce((a, b) => a + b);
  }
}