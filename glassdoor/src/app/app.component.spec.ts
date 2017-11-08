import { TestBed, async, ComponentFixture }   from '@angular/core/testing';
import { RouterTestingModule }                from '@angular/router/testing';
import { By }                                 from '@angular/platform-browser';
import { DebugElement }                       from '@angular/core';

import { AppComponent }  from './app.component';


describe('AppComponent', () => {

  let component:   AppComponent;
  let fixture:     ComponentFixture<AppComponent>;  
  let de:          DebugElement;
  let el:          HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        RouterTestingModule
      ]
    }).compileComponents();
  }));

  beforeEach( () => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.debugElement.componentInstance;

    de = fixture.debugElement.query(By.css('h1'));
    el = de.nativeElement;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should display original title`, () => {
    fixture.detectChanges();
    expect(el.textContent).toEqual(component.title);
  });
});
