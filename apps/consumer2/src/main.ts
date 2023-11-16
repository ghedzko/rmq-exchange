import { NestFactory } from '@nestjs/core';
import { Consumer2Module } from './consumer2.module';

async function bootstrap() {
  const app = await NestFactory.create(Consumer2Module);
  await app.listen(9003);
}
bootstrap();
