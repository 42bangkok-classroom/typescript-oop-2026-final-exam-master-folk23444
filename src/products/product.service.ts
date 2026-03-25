import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import { ProductController } from './product.controller';
import { Product } from './product.interface';

@Injectable()
export class ProductService {
    
    findAll(): Product[] {
        const filePath = path.join(process.cwd(), 'data', 'product.json');
        const data = fs.readFileSync(filePath, 'utf-8');
        return JSON.parse(data) as Product[];
}
}
