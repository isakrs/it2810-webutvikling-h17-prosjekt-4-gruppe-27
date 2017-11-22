import { async, ComponentFixture, TestBed }     from '@angular/core/testing';
import { RouterModule }                         from '@angular/router';
import { Http, HttpModule }                     from '@angular/http';
import { APP_BASE_HREF }                        from '@angular/common';

import { LoginComponent }     from './login.component';
import { MyPageComponent }    from '../my-page/my-page.component';

import { ProfileService }     from '../shared/profile.service';


describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent, MyPageComponent ],
      providers: [
        ProfileService,
        {provide: APP_BASE_HREF, useValue: '/'}
      ],
      imports: [
        RouterModule.forRoot([]),
        HttpModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});