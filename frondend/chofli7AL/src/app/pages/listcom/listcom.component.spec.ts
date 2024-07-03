import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListcomComponent } from './listcom.component';

describe('ListcomComponent', () => {
  let component: ListcomComponent;
  let fixture: ComponentFixture<ListcomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListcomComponent]
    });
    fixture = TestBed.createComponent(ListcomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
