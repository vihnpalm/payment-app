import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { MongooseModule } from '@nestjs/mongoose';
import { PaymentController } from './payment.controller';
import { PaymentService } from './payment.service';
import { PaymentSchema } from './schemas/payment.schema';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017', {useNewUrlParser: true}),
    MongooseModule.forFeature([{ name: 'Payment', schema: PaymentSchema }]),
    ClientsModule.register([
      {
        name: 'STATUS',
        transport: Transport.TCP,
        options: { port: 5001}
      },
      {
        name: 'PAYMENT',
        transport: Transport.TCP,
        options: { port: 3000}
      }
    ])
  ],
  controllers: [PaymentController],
  providers: [PaymentService],
})
export class PaymentModule {}
