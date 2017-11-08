import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { RouterModule } 	from '@angular/router';
import { HttpModule, Http } 					from '@angular/http';
import { By }										from '@angular/platform-browser';
import { DebugElement, CUSTOM_ELEMENTS_SCHEMA }					from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';

import { DashboardComponent } from './dashboard.component';
import { CompanySearchComponent } from '../companies/company-search/company-search.component';
import { CompanyService } from '../companies/shared/company.service';
import { Company } from '../companies/shared/company.model';


describe('DashboardComponent', () => {
 
 	let component: 	DashboardComponent;
  let fixture: 		ComponentFixture<DashboardComponent>;
	let de:					DebugElement;
	let el:					HTMLElement;

  let companyService: CompanyService;
  let spy: any;

  const mockCompanies: Company[] =  [
    {id: 1, name: 'DNB'},
    {id: 2, name: 'Bekk'},
    {id: 3, name: 'Kolonial.no'},
    {id: 4, name: 'Blank'},
    {id: 5, name: 'Accenture'},
    {id: 7, name: 'Mnemonic'},
    {id: 8, name: 'Statoil'}
  ];

  const mockCompaniesSmaller: Company[] =  [
    {id: 1, name: 'DNB'},
    {id: 2, name: 'Bekk'}
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardComponent, CompanySearchComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      imports: [ RouterModule.forRoot([]), HttpModule ],
      providers: [
        CompanyService,
        {provide: APP_BASE_HREF, useValue: '/'}
      ]
    })

    .compileComponents().then( () =>  {
      fixture = TestBed.createComponent(DashboardComponent);
      component = fixture.componentInstance;

      companyService = fixture.debugElement.injector.get(CompanyService) as any;
    })
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

	it(`should display title 'Top Companies'`, () => {
    de = fixture.debugElement.query(By.css('h3'));
    el = de.nativeElement;
		expect(el.textContent).toEqual('Top Companies');
	})

  it('should display companies 2, 3, 4 and 5', fakeAsync(() => {
    // Setup spy on the `getCompanies` method
    spy = spyOn(companyService, 'getCompanies').and.returnValue(Promise.resolve(mockCompanies));
    fixture.detectChanges();
    tick();
    fixture.detectChanges();

    const deElements = fixture.debugElement.queryAll(By.css('.company h4'));

    expect(deElements.length).toBe(4);
    expect(deElements[0].nativeElement.textContent).toBe('Bekk');
    expect(deElements[1].nativeElement.textContent).toBe('Kolonial.no');
    expect(deElements[2].nativeElement.textContent).toBe('Blank');
    expect(deElements[3].nativeElement.textContent).toBe('Accenture');
  }));


  it(`should work with less than 5 entries`, fakeAsync( () => {
    spy = spyOn(companyService, 'getCompanies').and.returnValue(Promise.resolve(mockCompaniesSmaller));
    fixture.detectChanges();
    tick();
    fixture.detectChanges();

    const deElements = fixture.debugElement.queryAll(By.css('.company h4'));

    expect(deElements.length).toBe(1);
    expect(deElements[0].nativeElement.textContent).toBe('Bekk');
  }));




});
