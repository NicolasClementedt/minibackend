import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import { Product } from '../entities/products.entity';

@Injectable()
export class ProductsService {
  private getProductsFromFile(): Product[] {
    try {
      const filePath = path.join(__dirname, '../../data/products.json');

      const jsonData = fs.readFileSync(filePath, 'utf-8');

      return JSON.parse(jsonData) as Product[];
    } catch (error) {
      console.error('Erro ao ler os produtos do arquivo', error);
      return [];
    }
  }

  getAll(): Product[] {
    return this.getProductsFromFile();
  }

  findById(id: number): Product | null {
    const allProducts = this.getProductsFromFile();
    const product = allProducts.find((p) => p.id === id);
    return product || null;
  }
}
