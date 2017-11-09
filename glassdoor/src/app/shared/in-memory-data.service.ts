import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const companies = [
      {id: 1, name: 'DNB'},
      {id: 2, name: 'Bekk'},
      {id: 3, name: 'Kolonial.no'},
      {id: 4, name: 'Blank'},
      {id: 5, name: 'Accenture'},
      {id: 7, name: 'Mnemonic'},
      {id: 8, name: 'Statoil'},
      {id: 9, name: 'Microsoft'},
      {id: 10, name: 'Palantir'}
    ];
    const reviews = [
      {id: 1, rating: 3, comment: 'Loved working here.', idCompany: 4},
      {id: 2, rating: 4, comment: 'Loved working here.', idCompany: 1},
      {id: 3, rating: 5, comment: 'Loved working here.', idCompany: 3},
      {id: 4, rating: 2, comment: 'Loved working here.', idCompany: 4},
      {id: 5, rating: 1, comment: 'Loved working here.', idCompany: 3},
      {id: 6, rating: 3, comment: 'Loved working here.', idCompany: 4},
      {id: 7, rating: 3, comment: 'Loved working here.', idCompany: 8}
    ]
    return {companies};
  }
}
