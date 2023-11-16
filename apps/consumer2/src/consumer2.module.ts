import { Module } from '@nestjs/common';
import { Consumer2Controller } from './consumer2.controller';
import { Consumer2Service } from './consumer2.service';
import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';

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
      enableControllerDiscovery: true,
    }),
  ],
  controllers: [Consumer2Controller],
  providers: [Consumer2Service],
})
export class Consumer2Module {}
