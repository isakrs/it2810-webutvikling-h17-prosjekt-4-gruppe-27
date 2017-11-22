import { TestBed, inject, fakeAsync, tick } 	from '@angular/core/testing';
import { MockBackend, MockConnection } 				from '@angular/http/testing';
import { Http, Response, ResponseOptions,
		 BaseRequestOptions, RequestOptions,
		 ConnectionBackend } 											from '@angular/http';
import { ReflectiveInjector } 								from '@angular/core';
import { Router }         										from '@angular/router';

import { environment }						from '../../../environments/environment';

import { ProfileService } 				from './profile.service';

describe('ProfileService', () => {

  const baseURL = environment.apiUrl;

  beforeEach(() => {
    this.injector = ReflectiveInjector.resolveAndCreate([
      {provide: ConnectionBackend, useClass: MockBackend},
      {provide: RequestOptions, useClass: BaseRequestOptions},
      {
       provide: Router, 
       useClass: class { navigate = jasmine.createSpy("navigate"); }
    	},
      Http,
      ProfileService
    ]);

    this.profileService = this.injector.get(ProfileService);
    this.backend = this.injector.get(ConnectionBackend) as MockBackend;
    this.backend.connections.subscribe((connection: any) => this.lastConnection = connection);
  });

  it('should query current service url on register [profile.service]', () => {
    this.profileService.onRegister();
    expect(this.lastConnection).toBeDefined();
    expect(this.lastConnection.request.url)
    .toBe(`${baseURL}/auth/signup`);
  });

  it('should query current service url on login [profile.service]', () => {
    this.profileService.onLogin();
    expect(this.lastConnection).toBeDefined();
    expect(this.lastConnection.request.url)
    .toBe(`${baseURL}/auth/login`);
  });

  it('should query current service url on verify [profile.service]', () => {
    this.profileService.isTokenValid();
    expect(this.lastConnection).toBeDefined();
    expect(this.lastConnection.request.url)
    .toBe(`${baseURL}/auth/verify`);
  });
});
