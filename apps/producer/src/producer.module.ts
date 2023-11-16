import { Module } from '@nestjs/common';
import { ProducerController } from './producer.controller';
import { ProducerService } from './producer.service';
import { RmqModule } from 'libs/common/rmq/rqm.module';

@Module({
  imports: [RmqModule],
  controllers: [ProducerController],
  providers: [ProducerService],
})
export class ProducerModule {}
