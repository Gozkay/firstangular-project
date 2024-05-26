import { Component, Input, Output, EventEmitter, OnInit,OnDestroy } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit , OnDestroy{
  @Input() Mydata = 'child responds';
  @Output() newDataEmitter = new EventEmitter<string>();
  data = 'tr';

  constructor(){
    //this.Mydata.emit('this is the child');
  }
  ngOnInit(): void {
      
  }
  ngOnDestroy(): void{
     alert("parent child relationship works!")
  }

  send(value : string){
    this.newDataEmitter.emit(value);
  }
  
  

}
