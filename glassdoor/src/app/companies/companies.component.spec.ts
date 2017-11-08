import { ComponentFixture, async, fakeAsync, tick, TestBed } from '@angular/core/testing';
import { DebugElement, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Http, HttpModule } from '@angular/http';
import { APP_BASE_HREF } from '@angular/common';
import { By } from '@angular/platform-browser';

import { CompaniesComponent } from './companies.component';
import { CompanyService } from './shared/company.service';
import { Company } from './shared/company.model';

describe('CompaniesComponent', () => {

  let comp: CompaniesComponent;
  let fixture: ComponentFixture<CompaniesComponent>;
  let companyService: CompanyService;
  let spy: any;

  const mockCompanies: Company[] =  [
    {id: 1, name: 'Statoil'},
    {id: 2, name: 'Amazon'},
    {id: 3, name: 'Google'},
    {id: 4, name: 'Kickstarter'},
    {id: 5, name: 'Apple'},
    {id: 7, name: 'Microsoft'},
    {id: 8, name: 'Dell'}
  ];

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [CompaniesComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        CompanyService,
        {provide: APP_BASE_HREF, useValue: '/'}
      ],
      imports: [
        RouterModule.forRoot([]),
        HttpModule
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
    expect(badgeElements.length).toBe(7);
    expect(buttonElements.length).toBe(7);
    expect(liElements[0].nativeElement.textContent.trim()).toContain('Statoil');
    expect(liElements[6].nativeElement.textContent.trim()).toContain('Dell');

  }));

  /* Add, delete and update functionality will be tested as E2E tests. */

});