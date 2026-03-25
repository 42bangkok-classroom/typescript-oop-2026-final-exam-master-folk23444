import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import { ProductController } from './product.controller';

@Injectable()
export class ProductService {
    
    findAll(){
    const filePath = path.join(process.cwd(), 'data', 'products.json');
    const data = fs.readFileSync(filePath, 'utf-8');
    const user = JSON.parse(data);
    return {user}
    }
}
