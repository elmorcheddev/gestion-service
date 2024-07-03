import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotpasseoblierComponent } from './motpasseoblier.component';

describe('MotpasseoblierComponent', () => {
  let component: MotpasseoblierComponent;
  let fixture: ComponentFixture<MotpasseoblierComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MotpasseoblierComponent]
    });
    fixture = TestBed.createComponent(MotpasseoblierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
