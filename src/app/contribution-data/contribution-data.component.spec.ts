import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContributionDataComponent } from './contribution-data.component';

describe('ContributionDataComponent', () => {
  let component: ContributionDataComponent;
  let fixture: ComponentFixture<ContributionDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContributionDataComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContributionDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
