import { NestFactory } from '@nestjs/core';
import { ProducerModule } from './producer.module';

async function bootstrap() {
  const app = await NestFactory.create(ProducerModule);
  await app.listen(9001);
  console.log(`Producer is listening on: ${await app.getUrl()}`);
}
bootstrap();
