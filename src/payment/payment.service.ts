import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PaymentInterface } from './interfaces/payment.interface';
import { CreateOrderDTO } from './dtos/create-order.dto';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class PaymentService {
  constructor(
    @Inject('PAYMENT') private readonly paymentClient: ClientProxy,
    @InjectModel('Payment') private readonly repo: Model<PaymentInterface>
    ) {}
  
  async handleOrderCreated(order: CreateOrderDTO):Promise<PaymentInterface> {
    const rand = Math.random() < 0.5
    const newOrder = new this.repo(order);
    if (rand){
      newOrder.state=`Order delivered`
      this.paymentClient.emit(
        'order_confirmed',
        newOrder._id
      )
      console.log(`Order confirmed!`)
      setTimeout(function() {
        console.log(`Order delivered!`);
    }, 5000);
    }
    else{    
      newOrder.state=`Order declined`
      this.paymentClient.emit(
        'order_declined',
        newOrder._id
      )
      console.log(`Order declined!`)
    }
    return newOrder.save();
  }
}
