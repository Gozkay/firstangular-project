import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar'

import { AppComponent } from './app.component';
import { OurFirstComponent } from './our-first/our-first.component';
import { InsideOurFirstComponent } from './our-first/inside-our-first.component';
import {LayoutModule} from './layout/layout.module';
import { ProductListComponent } from './product-list/product-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import { ProductFormComponent } from './product-form/product-form.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { SuccessDialogComponent } from './success-dialog/success-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import { KeyLoggerComponent } from './key-logger/key-logger.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { SwitchesComponent } from './switches/switches.component';
import {MatRadioModule} from '@angular/material/radio';
import { CustomizePipe } from './pipe/customize.pipe';
import { CopyrightDirective } from './copyright.directive';
import { NumericDirective } from './numeric.directive';
import { ProductHostDirective } from './product-host.directive';
import { HttpClientModule } from '@angular/common/http';
import { DataListComponent } from './data-list/data-list.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    OurFirstComponent,
    InsideOurFirstComponent,
    ProductListComponent,
    ProductFormComponent,
    SuccessDialogComponent,
    KeyLoggerComponent,
    ChildComponent,
    ParentComponent,
    SwitchesComponent,
    CustomizePipe,
    CopyrightDirective,
    NumericDirective,
    ProductHostDirective,
    DataListComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule, LayoutModule, BrowserAnimationsModule,AppRoutingModule,ReactiveFormsModule,MatDialogModule,
    MatRadioModule,FormsModule, HttpClientModule, FlexLayoutModule,MatToolbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
