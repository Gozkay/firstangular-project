import { Pipe, PipeTransform } from '@angular/core';
import { Products } from '../Product';
import { ProductsService } from '../products.service';

@Pipe({
  name: 'customize'
})
export class CustomizePipe implements PipeTransform {
  transform(value: Products[]): Products[] {
    if (value) {
      return value.sort((a: Products, b: Products) => {
        if (a.name < b.name) {
          return -1;
        } else if (a.name > b.name) {
          return 1;
        } else {
          return 0;
        }
      });
    }

    return [];
  }

}
