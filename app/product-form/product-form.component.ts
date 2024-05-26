import { Component,OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormGroup,FormControl, Validators,FormBuilder } from '@angular/forms';
import {ProductsService} from '../products.service';
import { Products } from '../Product';
import { MatDialog } from '@angular/material/dialog';
import {SuccessDialogComponent } from '../success-dialog/success-dialog.component';
import { Router } from '@angular/router';
import { CustomizePipe } from '../pipe/customize.pipe';


@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit{
  title: string = "Initial title";

  title$ = new Observable(observer =>{
    setInterval(()=>{
            observer.next();

    },5000);
  }
     
  )
  setTitle= ()=> {
    //this.title = 'the product management app';
    const timestamp = new Date().getMilliseconds();
    this.title = `This is set in the next: ${timestamp} milliseconds`; 
  }
form!:FormGroup;
items: Products[] = [];
private product!:Products;

  constructor(private fb:FormBuilder,private service: ProductsService, private dialog: MatDialog, private router: Router){
    //this.changeTitle(this.setTitle);
    //this.returnPromise().then(this.setTitle);
    this.title$.subscribe(this.setTitle);

      }

      ngOnInit(): void {
          this.form = this.fb.group({
            name:['Peter Mba',[Validators.required]],
            price: ['',[Validators.required]]           

          });

        this.items = this.service.getProducts();
        console.log("display from the Oninit() of product-form");
        console.log(this.items);
      }

      onSubmit(){
      
        
   this.product = <Products>{};
   this.product.name = this.form.controls['name'].value;
   this.product.price = this.form.controls['price'].value;
   console.log(this.product);
   //this.service.setProduct(product);
   //this.items.push(this.product);
   //console.log(`The content of the array after pushing in ${this.product} is :`);
   //console.log(this.items);
   this.openDialog();
        
   this.onClearform();  
   

      }

  onClearform(){
    //this.form.reset();
    this.form.setValue({
      price: 0
    });

      }

      openDialog(){
        console.log(`logged from within openDialog: ${this.product.name}`);
        let dialogRef = this.dialog.open(SuccessDialogComponent, {
          height: '400px',
          width: '600px',
          data: { name2: this.product.name },
        });
        // setTimeout(() =>{
        //   dialogRef.close();
        // },5000 
        // );
        dialogRef.afterClosed()
          .subscribe(result => {
            console.log(`result returned from the closed dialog is ${result}`);
          });

          this.changeTitle(
            ()=>{
              console.log('i was passed in a callback');
            }
          );  
        
      }


      changeTitle(callback: Function) {

        setTimeout(() =>{
          
          callback();

        },5000 );

      }

      returnPromise(){
        return new Promise<void>(resolve=>{
          setInterval(()=>{


            resolve();


          },5000);
        });
      }
        
      onKeylogger(){
           this.router.navigate(['/input-key']);
      }
}
