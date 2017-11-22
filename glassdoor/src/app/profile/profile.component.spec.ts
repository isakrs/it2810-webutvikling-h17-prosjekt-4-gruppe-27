import { async, ComponentFixture, TestBed }     from '@angular/core/testing';
import { RouterModule }                         from '@angular/router';
import { Http, HttpModule }                     from '@angular/http';
import { APP_BASE_HREF }                        from '@angular/common';

import { ProfileComponent }   from './profile.component';
import { LoginComponent }     from './login/login.component';
import { MyPageComponent }    from './my-page/my-page.component';
import { ProfileService }     from './shared/profile.service';


describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileComponent, MyPageComponent, LoginComponent ],
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
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});