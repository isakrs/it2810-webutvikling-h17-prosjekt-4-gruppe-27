import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterTestingModule } from '@angular/router/testing'


import { CompanyDetailComponent } from './company-detail.component';
import { CompanyService } from '../shared/company.service';
import { CompanyServiceSpy } from '../../dashboard/company-service-spy.service';



describe('CompanyDetailComponent', () => {
  let component: CompanyDetailComponent;
  let fixture: ComponentFixture<CompanyDetailComponent>;

   let csSpy: CompanyServiceSpy;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyDetailComponent ],
      imports: [ FormsModule, HttpModule, RouterTestingModule ],
    })
    // Override component's own provider
    .overrideComponent(CompanyDetailComponent, {
      set: {
        providers: [
          {provide: CompanyService, useClass: CompanyServiceSpy}
        ]
      }
    })
    .compileComponents().then( () =>  {
      fixture = TestBed.createComponent(CompanyDetailComponent);
      component = fixture.componentInstance;
      csSpy = fixture.debugElement.injector.get(CompanyService) as any;
    })
  }));

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(CompanyDetailComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  it('should create', () => {
    fixture.detectChanges();
    console.log("IN THIS TEST*********")
    expect(component).toBeTruthy();
  });
});
