import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpModule }                       from '@angular/http';
import { RouterModule }                     from '@angular/router';
import { APP_BASE_HREF }                    from '@angular/common';
import { MatCardModule,
         MatIconModule,
         MatListModule
       }     from '@angular/material';

import { MyPageComponent }   from './my-page.component';

describe('MyPageComponent', () => {
  let component: MyPageComponent;
  let fixture: ComponentFixture<MyPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyPageComponent ],
      providers: [
        {provide: APP_BASE_HREF, useValue: '/'}
      ],
      imports: [
        RouterModule.forRoot([]),
        HttpModule,
        MatCardModule,
        MatIconModule,
        MatListModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});