import { Pipe, PipeTransform } from '@angular/core';
import { bookModel } from '../models/filterPipe';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(target: bookModel[], price_range: string): any {
        if(price_range==="High"){
          return target.filter(x=>x.price>500)
        }
        else if(price_range==="Medium"){
          return target.filter(x=>x.price>300&&x.price<500)
        }
        else if(price_range==="Low"){
          return target.filter(x=>x.price<300)
        }
        else{
          return target
        }
  }
}
