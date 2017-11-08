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
    return {companies};
  }
}