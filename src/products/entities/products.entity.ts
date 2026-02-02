import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class Product {
  @IsNumber()
  id: number;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNumber()
  price: number;

  @IsString()
  description: string;

  @IsString()
  image: string;

  @IsString()
  category: string;

  @IsNumber()
  stock: number;
}
