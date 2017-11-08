import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } 	from '@angular/router/testing';
import { HttpModule } 					from '@angular/http';
import { By }										from '@angular/platform-browser';
import { DebugElement }					from '@angular/core';

import { DashboardComponent } from './dashboard.component';
import { CompanySearchComponent } from '../companies/company-search/company-search.component';
import { CompanyService } from '../companies/shared/company.service';
import { Company } from '../companies/shared/company.model';
import { CompanyServiceSpy } from './company-service-spy.service';


describe('DashboardComponent', () => {
 
 	let component: 	DashboardComponent;
  let fixture: 		ComponentFixture<DashboardComponent>;
	let de:					DebugElement;
	let el:					HTMLElement;

  let cService: CompanyService;
  let spy: any;

  let testCompany = new Company(42, 'Test Company');
  let companies: Company[] = [testCompany];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardComponent, CompanySearchComponent ],
      imports: [ RouterTestingModule, HttpModule ],
      providers: [ CompanyService ]
    })
    // // Override component's own provider
    // .overrideComponent(DashboardComponent, {
    //   set: {
    //     providers: [
    //       {provide: CompanyService, useClass: CompanyServiceSpy}
    //     ]
    //   }
    // })

    .compileComponents().then( () =>  {
      fixture = TestBed.createComponent(DashboardComponent);
      component = fixture.componentInstance;
      // get the component's injected HeroDetailServiceSpy
      cService = fixture.debugElement.injector.get(CompanyService) as any;

       // Setup spy on the `getQuote` method
      spy = spyOn(cService, 'getCompanies')
      .and.returnValue(Promise.resolve(companies));
    })
  }));

  beforeEach(() => {
		

		fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

	it(`should display title 'Top Companies'`, () => {
    de = fixture.debugElement.query(By.css('h3'));
    el = de.nativeElement;
		expect(el.textContent).toEqual('Top Companies');
	})

  it('should show companies after getCompanies promise (async)', async(() => {
    de = fixture.debugElement.query(By.css('h4'));
    el = de.nativeElement;
    fixture.detectChanges();        // update view with quote

 
    fixture.whenStable().then(() => { // wait for async getQuote
      fixture.detectChanges();        // update view with quote
      console.log("component.companies: ", component.companies);
      expect(component.companies).toBe(companies);
    });
  }));




});
