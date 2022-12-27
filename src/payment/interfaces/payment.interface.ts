import { Document } from 'mongoose';
    
export interface PaymentInterface extends Document {
  productToken: string; // token given per request to purchase
  product: string;
  card: number; //payment card
  amount: number;
  address: string;
  state: string; //order state
}