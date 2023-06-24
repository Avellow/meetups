import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reduceString'
})
export class ReduceStringPipe implements PipeTransform {

  transform(value: string, charNum: number): string {
    if (!value) {
      return '';
    }
    return value.slice(0, charNum) + '...';
  }

}
