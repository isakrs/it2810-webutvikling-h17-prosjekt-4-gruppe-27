import { ComponentFixture, async, fakeAsync, tick, TestBed } from '@angular/core/testing';
import { DebugElement, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule }                         from '@angular/router';
import { Http, HttpModule }                     from '@angular/http';
import { APP_BASE_HREF }                        from '@angular/common';
import { By }                                   from '@angular/platform-browser';
import { FormsModule }                          from '@angular/forms';

import { CompaniesComponent } from './companies.component';
import { CompanyService }     from './shared/company.service';
import { Company }            from './shared/company.model';
import { SortCompaniesPipe }  from './shared/sort-companies.pipe';

describe('CompaniesComponent', () => {

  let comp: CompaniesComponent;
  let fixture: ComponentFixture<CompaniesComponent>;
  let companyService: CompanyService;
  let spy: any;

  const mockCompanies: Company[] =  [
    {_id: '1', name: 'Statoil',      averageRating: null, nComments: null},
    {_id: '2', name: 'Amazon',       averageRating: 3,    nComments: 3},
    {_id: '3', name: 'Google',       averageRating: 3.3,  nComments: 9},
    {_id: '4', name: 'Kickstarter',  averageRating: null, nComments: null},
    {_id: '5', name: 'Apple',        averageRating: 2.1,  nComments: 43},
    {_id: '6', name: 'Microsoft',    averageRating: null, nComments: null},
    {_id: '7', name: 'Dell',         averageRating: null, nComments: null}
  ];

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [CompaniesComponent, SortCompaniesPipe],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        CompanyService,
        {provide: APP_BASE_HREF, useValue: '/'}
      ],
      imports: [
        RouterModule.forRoot([]),
        HttpModule,
        FormsModule
      ]
    }).compileComponents();

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompaniesComponent);
    comp = fixture.componentInstance;

    companyService = fixture.debugElement.injector.get(CompanyService);
  });

  it('should be created', () => {
    expect(comp).toBeTruthy();
  });

  it('should list companies', fakeAsync(() => {
    spy = spyOn(companyService, 'getCompanies')
          .and.returnValue(Promise.resolve(mockCompanies));
    fixture.detectChanges();
    tick();
    fixture.detectChanges();

    const liElements = fixture.debugElement
            .queryAll(By.css('ul.companies li'));
    const badgeElements = fixture.debugElement
            .queryAll(By.css('ul.companies li span.badge'));
    const buttonElements = fixture.debugElement
            .queryAll(By.css('ul.companies li button.delete'));

    expect(liElements.length).toBe(7);
    expect(badgeElements.length).toBe(3);
    expect(buttonElements.length).toBe(7);
    expect(liElements[0].nativeElement.textContent.trim()).toContain('Amazon');
    expect(liElements[6].nativeElement.textContent.trim()).toContain('Statoil');

  }));

  /* Add, delete and update functionality will be tested as E2E tests. */

});
