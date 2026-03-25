import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import { ProductController } from './product.controller';
import { Product } from './product.interface';

@Injectable()
export class ProductService {
    
    findAll(){
    const filePath = path.join(process.cwd(), 'data', 'products.json');
    const rawData = fs.readFileSync(filePath, 'utf-8');
    const Product = JSON.parse(rawData);
    return {Product}
}
}