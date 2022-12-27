import { Controller } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices/decorators';
import { PaymentService } from './payment.service';
import { CreateOrderDTO } from './dtos/create-order.dto';
import { PaymentInterface } from './interfaces/payment.interface';

@Controller()
export class PaymentController {
  constructor(private readonly appService: PaymentService) {}

  @EventPattern('order_created')
  handleOrderCreated(body: CreateOrderDTO): Promise<PaymentInterface> {
    return this.appService.handleOrderCreated(body)
  }
}
