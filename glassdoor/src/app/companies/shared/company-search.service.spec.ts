import { TestBed, inject, fakeAsync, tick }       from '@angular/core/testing';
import { MockBackend, MockConnection }            from '@angular/http/testing';
import { ReflectiveInjector }                     from '@angular/core';
import {
  Http,
  Response,
  ResponseOptions,
  BaseRequestOptions,
  RequestOptions,
  ConnectionBackend
} from '@angular/http';

import { environment } from '../../../environments/environment';

import { CompanySearchService } from './company-search.service';

describe('CompanySearchService', () => {

  const apiUrl = environment.apiUrl;

  beforeEach(() => {
    this.injector = ReflectiveInjector.resolveAndCreate([
      {provide: ConnectionBackend, useClass: MockBackend},
      {provide: RequestOptions, useClass: BaseRequestOptions},
      Http,
      CompanySearchService
    ]);

    this.companySearchService = this.injector.get(CompanySearchService);
    this.backend = this.injector.get(ConnectionBackend) as MockBackend;
    this.backend.connections.subscribe((connection: any) => this.lastConnection = connection);
  });

  it('should query current service url', () => {
    this.companySearchService.search('test');
    expect(this.lastConnection).toBeDefined();
    expect(this.lastConnection.request.url)
    .toBe(`${apiUrl}/api/company/?name=test`);
  });
});
