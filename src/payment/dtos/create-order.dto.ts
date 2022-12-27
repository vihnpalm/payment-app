import { IsNumber, IsString } from 'class-validator';

export class CreateOrderDTO {
  @IsString()
  productToken: string; // token given per request to purchase

  @IsString()
  address: string;

  @IsString()
  product: string;

  @IsNumber()
  card: number; //payment card

  @IsNumber()
  amount: number;

  @IsString()
  state: string; // order state
}