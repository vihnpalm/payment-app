import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateOrderDTO } from './dtos/create-order.dto';

@Injectable()
export class PaymentService {
  constructor(
    @Inject('PAYMENT') private readonly paymentClient: ClientProxy,
    ) {}
  
  async handleOrderCreated(order: CreateOrderDTO) {
    const rand = Math.random() < 0.5
    if (rand){
      this.paymentClient.emit(
        'order_confirmed',
        order
      )
      console.log(`Order confirmed!`)
      setTimeout(function() {
        console.log(`Order delivered!`);
    }, 5000);
    }
    else{    
      this.paymentClient.emit(
        'order_declined',
        order
      )
      console.log(`Order declined!`)
    }
  }
}
