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

import { CompanyFilterService } from './company-filter.service';

describe('CompanyFilterService', () => {
  beforeEach(() => {
    this.injector = ReflectiveInjector.resolveAndCreate([
      {provide: ConnectionBackend, useClass: MockBackend},
      {provide: RequestOptions, useClass: BaseRequestOptions},
      Http,
      CompanyFilterService
    ]);

    this.CompanyFilterService = this.injector.get(CompanyFilterService);
    this.backend = this.injector.get(ConnectionBackend) as MockBackend;
    this.backend.connections.subscribe((connection: any) => this.lastConnection = connection);
  });

  it('should query current service url with only minRating', () => {
    this.CompanyFilterService.search(4.4, undefined);
    expect(this.lastConnection).toBeDefined();
    expect(this.lastConnection.request.url).toBe('api/companies/?minRating=4.4');
  });

  it('should query current service url with only minComments', () => {
    this.CompanyFilterService.search(undefined, 3);
    expect(this.lastConnection).toBeDefined();
    expect(this.lastConnection.request.url).toBe('api/companies/?minComments=3');
  });

  it('should query current service url with both minRating and minComments', () => {
    this.CompanyFilterService.search(4.4, 2);
    expect(this.lastConnection).toBeDefined();
    expect(this.lastConnection.request.url)
    .toBe('api/companies/?minRating=4.4&minComments=2');
  });
});
