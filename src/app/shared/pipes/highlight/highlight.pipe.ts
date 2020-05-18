import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlight',
})
export class HighlightPipe implements PipeTransform {
  transform(value: any, args: any): any {
    if (!args) {
      return value;
    }
    const regExp = new RegExp(args, 'gi');
    const result = value.replace(regExp, `<mark>${args}</mark>`);
    return result;
  }
}
