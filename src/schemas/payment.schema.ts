import * as mongoose from 'mongoose';
    
export const PaymentSchema = new mongoose.Schema({
  title: String,
  description: String,
  state: String,
});