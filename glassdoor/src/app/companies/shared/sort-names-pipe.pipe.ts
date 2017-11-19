import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortNamesPipe'
})
export class SortNamesPipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
