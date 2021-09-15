import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentPlannerComponent } from './investment-planner.component';

describe('InvestmentPlannerComponent', () => {
  let component: InvestmentPlannerComponent;
  let fixture: ComponentFixture<InvestmentPlannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvestmentPlannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestmentPlannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
