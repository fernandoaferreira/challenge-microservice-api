import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT_SERVER_API).then(()=>{
    Logger.log(':: 🚀 API EMAIL RUN ONLINE ::')
    Logger.log(`:: 🚀 PORT ${process.env.PORT_SERVER_API}`)
  });
}
bootstrap();
