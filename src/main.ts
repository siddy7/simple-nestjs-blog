import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT || 3000 , () => {
    console.log("Express server listening on port %d in %s mode", this.address().port, process.env.PORT);
  });
}
bootstrap();
