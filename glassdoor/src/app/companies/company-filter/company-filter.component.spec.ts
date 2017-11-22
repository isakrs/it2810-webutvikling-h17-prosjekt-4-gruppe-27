import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule }          from '@angular/platform-browser/animations';
import { MatInputModule, MatCardModule,
        MatSelectModule }                   from '@angular/material';

import { CompanyFilterComponent } from './company-filter.component';

describe('CompanyFilterComponent', () => {
  let component: CompanyFilterComponent;
  let fixture: ComponentFixture<CompanyFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyFilterComponent ],
      imports: [
      MatInputModule,
      MatSelectModule,
      BrowserAnimationsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
