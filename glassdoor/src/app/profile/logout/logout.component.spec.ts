import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpModule }                   from '@angular/http';
import { RouterModule }                 from '@angular/router';
import { APP_BASE_HREF }                from '@angular/common';

import { LogoutComponent }   from './logout.component';
import { ProfileService }    from '../shared/profile.service';


describe('LogoutComponent', () => {
  let component: LogoutComponent;
  let fixture: ComponentFixture<LogoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogoutComponent ],
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
    fixture = TestBed.createComponent(LogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
