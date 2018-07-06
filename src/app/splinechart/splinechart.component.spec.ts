import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SplinechartComponent } from './splinechart.component';

describe('SplinechartComponent', () => {
  let component: SplinechartComponent;
  let fixture: ComponentFixture<SplinechartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SplinechartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SplinechartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
