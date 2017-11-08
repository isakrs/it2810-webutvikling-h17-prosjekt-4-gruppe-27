import { element } from 'protractor';

import { Observable } from 'rxjs/Observable';

import { ComponentFixture, async, fakeAsync, tick, TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { DebugElement, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';

import { CompanySearchComponent } from './company-search.component';
import { CompanySearchService } from '../shared/company-search.service';
import { Company } from '../shared/company.model';

describe('CompanySearchComponent', () => {

  let comp: CompanySearchComponent;
  let fixture: ComponentFixture<CompanySearchComponent>;
  let companySearchService: CompanySearchService;
  let spy: any;

  const mockCompanies: Company[] =  [
    {id: 1, name: 'McKinsey Consulting'},
    {id: 2, name: 'Bekk Consulting'},
    {id: 3, name: 'Spire Consulting'},
    {id: 7, name: 'Google Consulting'}
  ];

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [CompanySearchComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        CompanySearchService,
        {provide: APP_BASE_HREF, useValue: '/'}
      ],
      imports: [
        RouterModule.forRoot([]),
        HttpModule
      ]
    }).compileComponents();

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanySearchComponent);
    comp = fixture.componentInstance;

    companySearchService = fixture.debugElement.injector.get(CompanySearchService);
  });

  it('should create', () => {
    expect(comp).toBeTruthy();
  });

  it('should list search results', fakeAsync(() => {
    spy = spyOn(companySearchService, 'search')
          .and.returnValue(Observable.of(mockCompanies));
    fixture.detectChanges();

    const input = fixture.debugElement.query(By.css('#search-box'));
    input.nativeElement.value = 'consti';
    input.triggerEventHandler('keyup', null);

    tick(300);
    fixture.detectChanges();

    const results = fixture.debugElement.queryAll(By.css('.search-result'));

    expect(results.length).toBe(4);
    expect(results[0].nativeElement.textContent.trim()).toBe('McKinsey Consulting');
    expect(results[1].nativeElement.textContent.trim()).toBe('Bekk Consulting');
    expect(results[2].nativeElement.textContent.trim()).toBe('Spire Consulting');
    expect(results[3].nativeElement.textContent.trim()).toBe('Google Consulting');
  }));

});
