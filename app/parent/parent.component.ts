import { Component, Output,Input,EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  @Output() child_data = new EventEmitter<string>();
  current_title = 'iput';
  child_stream=[''];
  constructor(){
    //this.send_to_child();
  }
  send_to_child(){
    this.child_data.emit('change');
  }
  add_from_child(newData: string){
    this.child_stream.push(newData);
  }


}
