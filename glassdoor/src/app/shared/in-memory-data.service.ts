import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const companies = [
      {_id: '1',   name: 'DNB',          averageRating: 3.4,   nComments: 12},
      {_id: '2',   name: 'Bekk',         averageRating: null,  nComments: null},
      {_id: '3',   name: 'Kolonial.no',  averageRating: 4.1,   nComments: 12},
      {_id: '4',   name: 'Blank',        averageRating: 5,     nComments: 2},
      {_id: '5',   name: 'Accenture',    averageRating: null,  nComments: null},
      {_id: '6',   name: 'Mnemonic',     averageRating: null,  nComments: null},
      {_id: '7',   name: 'Statoil',      averageRating: 4.5,   nComments: 8},
      {_id: '8',   name: 'Microsoft',    averageRating: 4.7,   nComments: 10},
      {_id: '9',   name: 'Palantir',     averageRating: null,  nComments: null}
    ];
    const reviews = [
      {_id: '0', rating: 5, comment: 'Loved working here.', idCompany: '3'},
      {_id: '1', rating: 3, comment: 'Loved working here.', idCompany: '4'},
      {_id: '2', rating: 4, comment: 'Loved working here.', idCompany: '2'},
      {_id: '3', rating: 5, comment: 'Loved working here.', idCompany: '3'},
      {_id: '4', rating: 2, comment: 'Loved working here.', idCompany: '4'},
      {_id: '5', rating: 1, comment: 'Loved working here.', idCompany: '3'},
      {_id: '6', rating: 3, comment: 'Loved working here.', idCompany: '4'},
      {_id: '7', rating: 3, comment: 'Loved working here.', idCompany: '8'}
    ];
    const users = [
      {
        _id: '0', id: 0, username: 'marius', password: 'password123', reviews: [
          {_id: '0', rating: 5, comment: 'Loved working here.', idCompany: '3'},
          {_id: '1', rating: 3, comment: 'Kinda liked working here', idCompany: '4'},
        ]
      },
      {
        _id: '1', id: 1, username: 'isak', password: '12345', reviews: [
          {_id: '2', rating: 1, comment: 'Hated working here', idCompany: '1'},
          {_id: '3', rating: 1, comment: 'Also hated working here', idCompany: '1'},
      ]
      },
    ];
    return {companies, reviews, users};
  }
}
