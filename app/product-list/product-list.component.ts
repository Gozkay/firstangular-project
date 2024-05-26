import { Component,OnInit } from '@angular/core';
import {ProductsService} from '../products.service';
import{Products} from '../Product';
import { CustomizePipe } from '../pipe/customize.pipe';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
  title = 'product-list'

  public productService: ProductsService;
  products:Products[] =[];

  constructor(){
    this.productService = new ProductsService();
  }

  ngOnInit(): void {
      this.products = this.productService.getProducts();
  }

}
