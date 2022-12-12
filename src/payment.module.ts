import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { PaymentController } from './payment.controller';
import { PaymentService } from './payment.service';

@Module({
  imports: [
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
