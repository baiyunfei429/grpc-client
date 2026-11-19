import { NestFactory } from '@nestjs/core';
import { GrpcServerModule } from './grpc-server.module';
import { GrpcOptions, Transport } from '@nestjs/microservices';
import { join } from 'node:path';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<GrpcOptions>(GrpcServerModule, {
    transport: Transport.GRPC,
    options: {
      url: 'localhost:8888',
      package: 'book',
      // protoPath: join(__dirname, 'book/book.proto'),
      // protoPath: join(process.cwd(), 'proto/book.proto'),
      // protoPath: join(__dirname, 'apps/grpc-server/src/book/book.proto'),
      protoPath: join(__dirname, 'book/book.proto'),
    },
  });
  await app.listen();
}
void bootstrap();
