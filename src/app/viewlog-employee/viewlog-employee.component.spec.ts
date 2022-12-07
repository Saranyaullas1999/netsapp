import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewlogEmployeeComponent } from './viewlog-employee.component';

describe('ViewlogEmployeeComponent', () => {
  let component: ViewlogEmployeeComponent;
  let fixture: ComponentFixture<ViewlogEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewlogEmployeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewlogEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
