import { Pipe, PipeTransform } from '@angular/core';

import { Company } from './company.model';

@Pipe({
  name: 'sortNames'
})
export class SortNamesPipe implements PipeTransform {

  transform(companies: Company[]): Company[] {
    if (!companies || companies === undefined || companies.length === 0) return null;

      companies.sort((a: Company, b: Company) => {
        if (a.name < b.name) {
          return -1;
        } else if (a.name > b.name) {
          return 1;
        } else {
          return 0;
        }
      });
      return companies;
  }

}
