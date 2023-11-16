import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';
import { Global, Module } from '@nestjs/common';
@Global()
@Module({
  imports: [
    RabbitMQModule.forRoot(RabbitMQModule, {
      exchanges: [
        {
          name: 'plus',
          type: 'fanout',
        },
      ],
      uri: 'amqp://rabbitmq:5672',
    }),
  ],
  exports: [RabbitMQModule],
})
export class RmqModule {}
