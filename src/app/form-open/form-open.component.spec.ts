import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormOpenComponent } from './form-open.component';

describe('FormOpenComponent', () => {
  let component: FormOpenComponent;
  let fixture: ComponentFixture<FormOpenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormOpenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormOpenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
