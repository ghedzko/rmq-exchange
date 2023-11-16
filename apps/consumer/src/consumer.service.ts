import { Nack, RabbitRPC } from '@golevelup/nestjs-rabbitmq';
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
  })
  public async rpcHandler({ message }: { message: string }) {
    try {
      if (message === 'new-error') throw new Error(message);

      console.log(message);
    } catch (error) {
      console.log('hubo un error', error);
      return new Nack(true);
    }
  }
}
