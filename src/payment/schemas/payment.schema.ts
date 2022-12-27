/*import * as mongoose from 'mongoose';
    
export const PaymentSchema = new mongoose.Schema({
  productToken: String, // token given per request to purchase
  address: String,
  product: String,
  card: Number, //payment card
  amount: Number,
  state: String, //order state
});*/

import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Payment {
  @Prop()
  product: string;

  @Prop()
  productToken: string;

  @Prop()
  address: string;

  @Prop()
  card: number;

  @Prop()
  amount: number;

  @Prop()
  state: string;
}

export const PaymentSchema = SchemaFactory.createForClass(Payment)