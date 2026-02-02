import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { ProductsService } from '../services/products.service';
import { Product } from '../entities/products.entity';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  findAll(): Product[] {
    return this.productsService.getAll();
  }

  @Get(':id')
  findById(@Param('id', ParseIntPipe) id: number): Product | null {
    return this.productsService.findById(id);
  }
}
