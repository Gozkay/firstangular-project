import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationMenueComponent } from '../navigation-menue.component';
import {MatFormFieldModule} from '@angular/material/form-field';



@NgModule({
  declarations: [
    NavigationMenueComponent
  ],
  imports: [
    CommonModule, MatFormFieldModule
  ],
  exports: [
    MatFormFieldModule
  ]
})
export class LayoutModule { }
