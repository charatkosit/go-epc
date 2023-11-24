import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe, VersioningType } from '@nestjs/common';
import helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableVersioning({
    type: VersioningType.URI,
  });
  app.use(helmet());
  app.setGlobalPrefix('apiepc');
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors();
  await app.listen(3300);
}
bootstrap();
