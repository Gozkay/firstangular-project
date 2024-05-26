import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { Observable, fromEvent, of, pipe, filter, map, tap, from } from "rxjs";
import { ProductsService } from "./../products.service";
import { Products } from "./../Product";

@Component({
  selector: 'app-key-logger',
  templateUrl: './key-logger.component.html',
  styleUrls: ['./key-logger.component.css']
})
export class KeyLoggerComponent implements OnInit{
  @ViewChild('keyContainer', {static: true}) input: ElementRef | undefined;
  title: string = "";
  keys = '';
  displayVal: string = '';
  displayItems: Products[] = [];
  timeStamp = new Date().getMilliseconds();
  



  //lifecycle
  ngOnInit(): void {
    const Logger$ = fromEvent<KeyboardEvent>(this.input?.nativeElement, 'keydown');
    Logger$.subscribe((evt) => {
      this.keys += evt.key;
    });

    this.showPromise().then(this.setTitle);

  }



  //constructor
  constructor(private productsService: ProductsService) {
    const holdItems$ = of(this.productsService.getProducts());
    holdItems$.subscribe(item => {
      setInterval(() => {
        this.displayItems = item;
        this.timeStamp;
      }, 3000)
    })
  }



  setTitle = () => {
    this.title = `testing promises using a callback ${this.timeStamp}`
  }

  showPromise() {
    return new Promise<void> (resolve => {
      setInterval(() => {
        resolve();
      }, 5000)
    })
  }
}
