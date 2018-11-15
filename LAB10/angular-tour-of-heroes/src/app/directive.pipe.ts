import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'directive'
})
export class DirectivePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
