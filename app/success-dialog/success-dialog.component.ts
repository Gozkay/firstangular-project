import { Component,Inject,OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Products } from '../Product';




@Component({
  selector: 'app-success-dialog',
  templateUrl: './success-dialog.component.html',
  styleUrls: ['./success-dialog.component.css']
})
export class SuccessDialogComponent implements OnInit{
public hold: string = "";
  constructor(@Inject(MAT_DIALOG_DATA) public data: {name2: any}, public dialogref:MatDialogRef<SuccessDialogComponent>){}

  ngOnInit(): void {
      console.log(`logged from the dialog is ${this.data.name2}`);
      this.hold = this.data.name2;
  }

  onCloseDialog(){
    this.dialogref.close('Ukwa');
  }

}
