import { Module } from '@nestjs/common';
import { ProducerController } from './producer.controller';
import { ProducerService } from './producer.service';
import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';

@Module({
  imports: [
    RabbitMQModule.forRoot(RabbitMQModule, {
      exchanges: [
        {
          name: 'producer',
          type: 'fanout',
        },
      ],
      uri: 'amqp://rabbitmq:5672',
      channels: {
        'channel-1': {
          prefetchCount: 15,
          default: true,
        },
        'channel-2': {
          prefetchCount: 2,
        },
      },
    }),
  ],
  controllers: [ProducerController],
  providers: [ProducerService],
})
export class ProducerModule {}
