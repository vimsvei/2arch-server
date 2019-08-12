import {NestFactory} from '@nestjs/core';
import {DocumentBuilder, SwaggerModule} from '@nestjs/swagger';
import {ApplicationModule} from './app/app.module';

declare const module: any;

async function bootstrap() {
  const app = await NestFactory
    .create(ApplicationModule);

  const options = new DocumentBuilder()
    .setTitle('2ARCH REST API')
    .setDescription('The REST API description')
    .setVersion('1.0')
    .addTag('2arch')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('swagger', app, document);

  await app.listen(3000);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}

bootstrap();
