import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  add:number = 2;
  title = `This is the XC7 Systems angular bootcamp . The number we got is ${this.add}`;
  constructor(private router:Router){   
  }

  OnLoadProduct(){
    this.router.navigate(['/products-list']);
  }

  onLoadProductForm(){
    this.router.navigate(['/enter-products']);
  }
  onLoadParentForm(){
      this.router.navigate(['/parent']);
  }
  
  onLoadSwitches(){
    this.router.navigate(['switch/']);
}
      
  }
