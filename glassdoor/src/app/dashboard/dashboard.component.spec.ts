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

  let csSpy: CompanyServiceSpy;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardComponent, CompanySearchComponent ],
      imports: [ RouterTestingModule, HttpModule ],
    })
    // Override component's own provider
    .overrideComponent(DashboardComponent, {
      set: {
        providers: [
          {provide: CompanyService, useClass: CompanyServiceSpy}
        ]
      }
    })

    .compileComponents().then( () =>  {
      fixture = TestBed.createComponent(DashboardComponent);
      component = fixture.componentInstance;
      // get the component's injected HeroDetailServiceSpy
      csSpy = fixture.debugElement.injector.get(CompanyService) as any;
    })
  }));

  beforeEach(() => {
		de = fixture.debugElement.query(By.css('h3'));
		el = de.nativeElement;

		fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

	it(`should display title 'Top Companies'`, () => {
		expect(el.textContent).toEqual('Top Companies');
	})

  it('should have called `getCompanies`', () => {
  expect(csSpy.getCompanies.calls.count()).toBe(1, 'getCompanies called once');
  });




});
