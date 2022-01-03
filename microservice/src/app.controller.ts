import { Controller, Get } from '@nestjs/common';
import {
  EventPattern,
  GrpcMethod,
  MessagePattern,
} from '@nestjs/microservices';
import { AppService } from './app.service';

interface INumberArray {
  data: number[];
}
interface ISumOfNumberArray {
  sum: number;
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @GrpcMethod('AppController', 'Accumulate')
  accumulate(numberArray: INumberArray): ISumOfNumberArray {
    const sum = (numberArray.data || []).reduce((a, b) => a + b);
    return { sum };
  }

  // Message Pattern
  // @MessagePattern('add')
  // accumulate(data: number[]): number {
  //   console.log(data);
  //   return (data || []).reduce((a, b) => a + b);
  // }
}
