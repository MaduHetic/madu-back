import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as helmet from 'helmet';
import * as rateLimit from 'express-rate-limit';
import * as compression from 'compression';
import * as cookieParser from 'cookie-parser';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

/**
 * Main function who call the different router and middleware for the app to work properly
 * Helmet helps you secure your Express apps by setting various HTTP headers
 * Use to limit repeated requests to  APIs
 */
async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: true,
    logger: ['error'],
  });
  app.use(helmet());
  app.enableCors();
  app.use(cookieParser());
  app.use(
    rateLimit({
      windowMs: 5 * 60 * 1000, // 15 minutes
      max: 1000, // limit each IP to 100 requests per windowMs
    }),
  );
  const options = new DocumentBuilder()
    .setTitle('Madu')
    .setDescription('The madu API description')
    .setVersion('1.0')
    .addTag('madu')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
  app.use(compression());
  await app.listen(3000);
}
bootstrap();
