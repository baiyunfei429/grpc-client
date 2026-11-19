import { Controller, Get } from '@nestjs/common';
import { GrpcServerService } from './grpc-server.service';
import { GrpcMethod } from '@nestjs/microservices';

@Controller()
export class GrpcServerController {
  constructor(private readonly grpcServerService: GrpcServerService) { }

  @GrpcMethod('BookService', 'FindBook')
  findBook(data: { id: number }) {
    const items = [
      { id: 1, name: 'FE', desc: 'FE desc' },
      { id: 2, name: 'Nest', desc: 'Nest desc' },
    ];
    return items.find(({ id }) => id === data.id);
  }

  @Get()
  getHello(): string {
    return this.grpcServerService.getHello();
  }
}
