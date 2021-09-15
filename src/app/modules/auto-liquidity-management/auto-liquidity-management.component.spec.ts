import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoLiquidityManagementComponent } from './auto-liquidity-management.component';

describe('AutoLiquidityManagementComponent', () => {
  let component: AutoLiquidityManagementComponent;
  let fixture: ComponentFixture<AutoLiquidityManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutoLiquidityManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoLiquidityManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
