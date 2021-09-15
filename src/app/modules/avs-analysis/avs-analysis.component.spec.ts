import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvsAnalysisComponent } from './avs-analysis.component';

describe('AvsAnalysisComponent', () => {
  let component: AvsAnalysisComponent;
  let fixture: ComponentFixture<AvsAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvsAnalysisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvsAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
