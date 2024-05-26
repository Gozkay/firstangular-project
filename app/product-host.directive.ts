import { Directive,ViewContainerRef,OnInit } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';

@Directive({
  selector: '[appProductHost]'
})
export class ProductHostDirective implements OnInit {

  constructor(private vc :ViewContainerRef) { 

  }

ngOnInit(): void {
   const dlc= this.vc.createComponent(ProductListComponent);
}
}
