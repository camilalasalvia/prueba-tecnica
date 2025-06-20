import { Injectable } from '@angular/core';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private products: Product[];

  constructor() {
    this.products = [];
  }

  getProducts(): Product[] {
    return this.products;
  }

  getProductById(productId: number): Product | undefined {
    const product = this.products.find(p => p.id === productId);
    return new Product(product);
  }

  createProduct(product: Product): void {
    const newProduct = new Product(product);
    newProduct.id = this.products.length + 1;
    this.products.push(newProduct);
  }

  editProduct(product: Product): void {
    const editedProduct = this.products.find(p => p.id === product.id)!;
    editedProduct.name = product.name;
    editedProduct.price = product.price;
    editedProduct.email = product.email;
    editedProduct.date = product.date;
  }

  deleteProduct(productId: number): void {
    this.products = this.products.filter(p => p.id !== productId);
  }
}
