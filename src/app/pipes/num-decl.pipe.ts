import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numDecl'
})
export class NumDeclPipe implements PipeTransform {

  transform(value: number, titles: [string, string, string]): string {
    const cases = [2, 0, 1, 1, 1, 2];
    const word = titles[(value % 100 > 4 && value % 100 < 20) ? 2 : cases[(value % 10 < 5) ? value % 10 : 5]];
    return `${value} ${word}`;
  }

}
