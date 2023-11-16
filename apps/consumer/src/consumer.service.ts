import {
  MessageHandlerErrorBehavior,
  RabbitRPC,
} from '@golevelup/nestjs-rabbitmq';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ConsumerService {
  getHello(): string {
    return 'Hello World!';
  }
  @RabbitRPC({
    exchange: 'plus',
    routingKey: 'test-route',
    queue: 'consumer1-queue',
    errorBehavior: MessageHandlerErrorBehavior.ACK,
    errorHandler: (error) => console.log('error handler:', error),
  })
  public async rpcHandler({ message }: { message: string }) {
    if (message === 'new-error') throw new Error(message);
    console.log(message);
  }
}
