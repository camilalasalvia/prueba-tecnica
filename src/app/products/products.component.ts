import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ProductsService } from '../services/products.service';
import { Product } from '../models/Product';

@Component({
  selector: 'app-products',
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export default class ProductsComponent implements OnInit {
  products: Product[];

  constructor(private readonly _router: Router, private readonly _productService: ProductsService) {
    this.products = [];
  }

  ngOnInit(): void {
    this.getProducts();
  }

  private getProducts(): void {
    this.products = this._productService.getProducts();
  }

  redirectToCreateProduct(): void {
    this._router.navigate(['products/create']);
  }

  redirectToEditProduct(productId: Number): void {
    this._router.navigate(['products/edit', productId]);
  }

  deleteProduct(productId: number): void {
    this._productService.deleteProduct(productId);
    this.getProducts();
  }  

}
