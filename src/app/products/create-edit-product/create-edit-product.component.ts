import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../models/Product';
import { FormsModule } from '@angular/forms';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-create-edit-product',
  imports: [FormsModule],
  templateUrl: './create-edit-product.component.html'
})
export default class CreateEditProductComponent implements OnInit {
  product: Product;
  isEditing = false;
  readonly EmailRegex = RegExp(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/);

  constructor(
    private readonly _router: Router, 
    private readonly _productService: ProductsService, 
    private readonly _route: ActivatedRoute
  ) {
    this.product = new Product();
  }

  ngOnInit(): void {
    const productId = this._route.snapshot.paramMap.get('productId') ?? '';

    if(productId) {
      this.isEditing = true;
      this.product = this._productService.getProductById(Number(productId))!;
    }
  }

  redirectToProducts(): void {
    this._router.navigate(['products']);
  }

  saveCreationEdition(): void {
    if(this.isEditing) {
      this._productService.editProduct(this.product);
      this.redirectToProducts();
    } 
    else {
      this._productService.createProduct(this.product);
      this.product = new Product();
    }
  }

  canSaveCreationEdition(): boolean {
    const {name, price, email, date} = this.product;

    if(!name || !price || !email || !date) {
      return false;
    }

    if(!this.EmailRegex.test(email)) {
      return false;
    }
    
    return true;
  }
}
