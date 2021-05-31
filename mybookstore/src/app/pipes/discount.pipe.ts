import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discount'
})
export class DiscountPipe implements PipeTransform {

  transform(value: number): any {
    if(value>500){
      return value-value*0.1
    }
    if(value>400){
      return value-value*0.07
    }
    if(value>300){
      return value-value*0.05
    }
    else{
      return value-value*0.01
    }
  }

}
