import { TestBed, async, ComponentFixture }   from '@angular/core/testing';
import { RouterTestingModule }                from '@angular/router/testing';
import { By }                                 from '@angular/platform-browser';
import { DebugElement }                       from '@angular/core';
import { HttpModule }                         from '@angular/http';

import { AppComponent }      from './app.component';
import { LogoutComponent }   from './profile/logout/logout.component';
import { ProfileService }    from './profile/shared/profile.service';

describe('AppComponent', () => {

  let component:   AppComponent;
  let fixture:     ComponentFixture<AppComponent>;  
  let de:          DebugElement;
  let el:          HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        LogoutComponent
      ],
      providers: [ProfileService],
      imports: [
        RouterTestingModule,
        HttpModule
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
