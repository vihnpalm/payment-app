import { NestFactory } from '@nestjs/core';
//import { Transport } from '@nestjs/microservices/enums';
import { PaymentModule } from './payment.module';

async function bootstrap() {
  const app = await NestFactory.create(PaymentModule);
  // const microservice = app.connectMicroservice({
  //   transport: Transport.TCP,
  //   options: {
  //     port:5001
  //   }
  // })

  await app.startAllMicroservices();
  await app.listen(5001);
}
bootstrap();
