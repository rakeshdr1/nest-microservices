import { Body, Controller, Get, Post } from '@nestjs/common';
import { Client, ClientGrpc } from '@nestjs/microservices';
import { IGrpcService } from './grpc.interface';
import { microserviceOptions } from './grpc.options';

@Controller()
export class AppController {
  @Client(microserviceOptions)
  private client: ClientGrpc;

  private grpcService: IGrpcService;

  onModuleInit() {
    this.grpcService = this.client.getService<IGrpcService>('AppController');
  }

  @Post()
  accumulate(@Body('data') data: number[]) {
    return this.grpcService.accumulate({ data });
  }

  // @Post()
  // accumulate(@Body('data') data: number[]) {
  //   return this.appService.addNumbers(data);
  // }
}
