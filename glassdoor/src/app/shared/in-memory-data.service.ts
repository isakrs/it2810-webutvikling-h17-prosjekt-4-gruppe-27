import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const companies = [
      {id: 1,   name: 'DNB',          averageRating: 3.4,   nComments: 12},
      {id: 2,   name: 'Bekk',         averageRating: null,  nComments: null},
      {id: 3,   name: 'Kolonial.no',  averageRating: 4.1,   nComments: 12},
      {id: 4,   name: 'Blank',        averageRating: 5,     nComments: 2},
      {id: 5,   name: 'Accenture',    averageRating: null,  nComments: null},
      {id: 7,   name: 'Mnemonic',     averageRating: null,  nComments: null},
      {id: 8,   name: 'Statoil',      averageRating: 4.5,   nComments: 8},
      {id: 9,   name: 'Microsoft',    averageRating: 4.7,   nComments: 10},
      {id: 10,  name: 'Palantir',     averageRating: null,  nComments: null}
    ];
    const reviews = [
      {id: 0, rating: 5, comment: 'Loved working here.', idCompany: 3},
      {id: 1, rating: 3, comment: 'Loved working here.', idCompany: 4},
      {id: 2, rating: 4, comment: 'Loved working here.', idCompany: 2},
      {id: 3, rating: 5, comment: 'Loved working here.', idCompany: 3},
      {id: 4, rating: 2, comment: 'Loved working here.', idCompany: 4},
      {id: 5, rating: 1, comment: 'Loved working here.', idCompany: 3},
      {id: 6, rating: 3, comment: 'Loved working here.', idCompany: 4},
      {id: 7, rating: 3, comment: 'Loved working here.', idCompany: 8}
    ];
    return {companies, reviews};
  }
}
