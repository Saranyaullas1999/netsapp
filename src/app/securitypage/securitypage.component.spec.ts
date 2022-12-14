import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecuritypageComponent } from './securitypage.component';

describe('SecuritypageComponent', () => {
  let component: SecuritypageComponent;
  let fixture: ComponentFixture<SecuritypageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecuritypageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecuritypageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
