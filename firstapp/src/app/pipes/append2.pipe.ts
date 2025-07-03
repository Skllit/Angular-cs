import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'append2',
  standalone: false
})
export class Append2Pipe implements PipeTransform {

  transform(value: string, second:string): string {
    if(value==null)return value;
    return value+second;
  }

}
