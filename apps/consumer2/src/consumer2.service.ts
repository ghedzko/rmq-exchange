import { RabbitRPC } from '@golevelup/nestjs-rabbitmq';
import { Injectable } from '@nestjs/common';

@Injectable()
export class Consumer2Service {
  getHello(): string {
    return 'Hello World!';
  }
  @RabbitRPC({
    exchange: 'plus',
    routingKey: 'test-route',
    queue: 'consumer2-queue',
  })
  public async rpcHandler({ message }: { message: string }) {
    console.log(message);
  }
}
