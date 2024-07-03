import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPrestComponent } from './list-prest.component';

describe('ListPrestComponent', () => {
  let component: ListPrestComponent;
  let fixture: ComponentFixture<ListPrestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListPrestComponent]
    });
    fixture = TestBed.createComponent(ListPrestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
