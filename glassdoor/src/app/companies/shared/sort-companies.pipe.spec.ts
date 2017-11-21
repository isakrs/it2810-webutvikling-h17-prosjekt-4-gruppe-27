import { SortCompaniesPipe } from './sort-companies.pipe';

const companies = [
  {_id: '1',   name: 'DNB',          averageRating: 3.4,   nComments: 13},
  {_id: '2',   name: 'Bekk',         averageRating: null,  nComments: 12},
  {_id: '3',   name: 'Kolonial.no',  averageRating: 4.1,   nComments: 0}
];

describe('SortCompaniesPipe', () => {

	let sortCompaniesPipe: SortCompaniesPipe;

	beforeEach(() => {
    sortCompaniesPipe = new SortCompaniesPipe();
  });

  it('create an instance', () => {
    expect(sortCompaniesPipe).toBeTruthy();
  });

  it('should filter correctly on name', () => {
  	const filtered = sortCompaniesPipe.transform(companies, 'name');
  	expect(filtered.length).toBe(3);
  	expect(filtered[0].name).toBe('Bekk');
  	expect(filtered[2].name).toBe('Kolonial.no');
  });

  it('should filter correctly on averageRating', () => {
  	const filtered = sortCompaniesPipe.transform(companies, 'averageRating');
  	expect(filtered.length).toBe(3);
  	expect(filtered[0].name).toBe('Kolonial.no');
  	expect(filtered[2].name).toBe('Bekk');
  });

  it('should filter correctly on numComment', () => {
  	const filtered = sortCompaniesPipe.transform(companies, 'nComments');
  	expect(filtered.length).toBe(3);
  	expect(filtered[0].name).toBe('DNB');
  	expect(filtered[2].name).toBe('Kolonial.no');
  });

});
