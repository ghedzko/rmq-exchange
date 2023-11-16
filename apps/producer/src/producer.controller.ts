import { Controller, Get, Query } from '@nestjs/common';
import { ProducerService } from './producer.service';

@Controller('producer')
export class ProducerController {
  constructor(private readonly producerService: ProducerService) {}

  @Get()
  async getHello(@Query('message') message: string) {
    return await this.producerService.getHello(message);
  }
}
