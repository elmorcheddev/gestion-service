import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListdemandeClientComponent } from './listdemande-client.component';

describe('ListdemandeClientComponent', () => {
  let component: ListdemandeClientComponent;
  let fixture: ComponentFixture<ListdemandeClientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListdemandeClientComponent]
    });
    fixture = TestBed.createComponent(ListdemandeClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
