import { TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { Http, Response, ResponseOptions, BaseRequestOptions, RequestOptions, ConnectionBackend } from '@angular/http';
import { ReflectiveInjector } from '@angular/core';

import { CompanyService } from './company.service';
import { Company } from './company.model';

describe('CompanyService', () => {

	const mockResponse = [
    {id: 0, name: 'DNB'},
    {id: 1, name: 'Bekk'}
  ];

  beforeEach(() => {
    this.injector = ReflectiveInjector.resolveAndCreate([
      {provide: ConnectionBackend, useClass: MockBackend},
      {provide: RequestOptions, useClass: BaseRequestOptions},
      Http,
      CompanyService
    ]);

    this.companyService = this.injector.get(CompanyService);
    this.backend = this.injector.get(ConnectionBackend) as MockBackend;
    this.backend.connections.subscribe((connection: any) => this.lastConnection = connection);
  });

  it('should query current service url [company.service]', () => {
    this.companyService.getCompanies();
    expect(this.lastConnection).toBeDefined();
    expect(this.lastConnection.request.url).toBe('api/companies');
  });

  it('getCompanies() should return companies', fakeAsync(() => {

    let result: Company[];
    
    // note: had to add '.data' to companies here, if not result was undefined. Ref earlier discussion about json().data
    this.companyService.getCompanies().then((companies) => result = companies.data);
    this.lastConnection.mockRespond(new Response(new ResponseOptions({
      body: JSON.stringify({data: mockResponse})
    })));

    tick();
    expect(result.length).toBe(2);
    expect(result[0].id).toBe(0);
    expect(result[0].name).toBe('DNB');

  }));
});
