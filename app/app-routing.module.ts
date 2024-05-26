import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { KeyLoggerComponent } from './key-logger/key-logger.component';
import { ParentComponent } from './parent/parent.component';
import { SwitchesComponent } from './switches/switches.component';
import { HomeComponent } from './home/home.component';


const routes: Routes  = [
  {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'home',component:HomeComponent},
    {path:'products-list',component: ProductListComponent},
    {path:'enter-products',component:ProductFormComponent },
    {path: 'input-key',component:KeyLoggerComponent},
    {path: 'parent',component:ParentComponent},
    {path: 'switch', component: SwitchesComponent}

];

@NgModule({
  imports : [RouterModule.forRoot(routes)],
  exports : [RouterModule]

})
export class AppRoutingModule{


}
