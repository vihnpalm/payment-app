import { Body, Controller, Get } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices/decorators';
import { PaymentService } from './payment.service';
import { CreateOrderDTO } from './dtos/create-order.dto';

@Controller()
export class PaymentController {
  constructor(private readonly appService: PaymentService) {}

  @EventPattern('order_created')
  handleOrderCreated(data: CreateOrderDTO) {
    return this.appService.handleOrderCreated(data)
  }
}
