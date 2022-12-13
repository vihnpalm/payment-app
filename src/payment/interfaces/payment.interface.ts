import { Document } from 'mongoose';
    
export interface Payment extends Document {
  readonly title: string;
  readonly description: string;
  state: string;
}