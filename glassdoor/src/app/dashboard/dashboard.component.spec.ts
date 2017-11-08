import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } 	from '@angular/router/testing';
import { HttpModule } 					from '@angular/http';
import { By }										from '@angular/platform-browser';
import { DebugElement }					from '@angular/core';

import { DashboardComponent } from './dashboard.component';
import { CompanySearchComponent } from '../companies/company-search/company-search.component';
import { CompanyService } from '../companies/shared/company.service';

describe('DashboardComponent', () => {
 
 	let component: 	DashboardComponent;
  let fixture: 		ComponentFixture<DashboardComponent>;
	let de:					DebugElement;
	let el:					HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardComponent, CompanySearchComponent ],
      imports: [ RouterTestingModule, HttpModule ],
      providers: [ CompanyService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;

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

});
