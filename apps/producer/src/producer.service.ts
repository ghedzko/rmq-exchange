import { AmqpConnection } from '@golevelup/nestjs-rabbitmq';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ProducerService {
  constructor(readonly amqpConnection: AmqpConnection) {}
  async getHello(message: string) {
    await this.amqpConnection.request({
      exchange: 'plus',
      routingKey: 'test-route',
      payload: { message: message },
    });
    return message;
  }
  async getHello2(message: string) {
    await this.amqpConnection.request({
      exchange: 'plus',
      routingKey: 'otro-msg',
      payload: { message: message },
    });
    return message;
  }
}
