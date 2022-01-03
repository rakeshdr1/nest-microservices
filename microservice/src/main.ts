import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { AppModule } from './app.module';

async function bootstrap() {
  const microserviceOptions = {
    transport: Transport.GRPC,
    options: {
      package: 'app',
      protoPath: join(__dirname, '../src/app.proto'),
    },
  };

  // TCP transport microservice
  // const microserviceOptions = {
  //   transport: Transport.TCP,
  //   options: {
  //     host: '127.0.0.1',
  //     port: 8877,
  //   },
  // };

  // Redis
  // const microserviceOptions = {
  //   transport: Transport.REDIS,
  //   options: {
  //     url: 'redis://localhost:6379',
  //   },
  // };

  const app = await NestFactory.createMicroservice(
    AppModule,
    microserviceOptions,
  );
  app.listen();
}
bootstrap();
