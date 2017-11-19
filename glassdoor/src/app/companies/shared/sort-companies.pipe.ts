import { Pipe, PipeTransform } from '@angular/core';

import { Company } from './company.model';

@Pipe({
  name: 'sortNames'
})
export class SortCompaniesPipe implements PipeTransform {

  transform(companies: Company[], sortValue: any): Company[] {

    if (!companies || companies === undefined || companies.length === 0) return null;

      companies.sort((a: Company, b: Company) => {
        if (a[sortValue] < b[sortValue]) {
          return -1;
        } else if (a[sortValue] > b[sortValue]) {
          return 1;
        } else {
          return 0;
        }
      });
      // companies are sorted ascendingly (A-Z), (0-inf)

      if (sortValue === 'averageRating' || sortValue === 'nComments') {
        return companies.reverse();
      } else {
        return companies;
      }

  }

}
