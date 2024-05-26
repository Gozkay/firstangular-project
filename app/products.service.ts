import { Injectable } from '@angular/core';
import {Products} from './Product';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  items: Products[] = []
 constructor() {
  this.items =   [ {
    name: 'Cloth',
    price: 8000
  },
  {
    name: 'Head phone',
    price: 12800
  },
  {
    name:'Body Spray',
    price: 3500
  },
  {
    name: 'Physics Text book',
    price: 8000
  },
  {
    name: 'Rasphberry',
    price: 76800
  },
  {
    name:'FPV Drone Components',
    price: 250000
  } ];
 }

   

  getProducts(): Products[]{
    return this.items;
  
   }

   setProduct(item:Products){
    this.items.push(item);
     console.log("logged from the service");
    console.log(item);
    console.log(`The content of the array after pushing in ${item} is :`);
    console.log(this.items);

   }
}
