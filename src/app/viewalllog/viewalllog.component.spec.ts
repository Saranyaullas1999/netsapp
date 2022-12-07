import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewalllogComponent } from './viewalllog.component';

describe('ViewalllogComponent', () => {
  let component: ViewalllogComponent;
  let fixture: ComponentFixture<ViewalllogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewalllogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewalllogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
