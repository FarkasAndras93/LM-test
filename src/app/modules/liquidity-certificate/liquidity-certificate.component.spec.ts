import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiquidityCertificateComponent } from './liquidity-certificate.component';

describe('LiquidityCertificateComponent', () => {
  let component: LiquidityCertificateComponent;
  let fixture: ComponentFixture<LiquidityCertificateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiquidityCertificateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LiquidityCertificateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
