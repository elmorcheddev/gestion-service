import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilsdetailsComponent } from './profilsdetails.component';

describe('ProfilsdetailsComponent', () => {
  let component: ProfilsdetailsComponent;
  let fixture: ComponentFixture<ProfilsdetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfilsdetailsComponent]
    });
    fixture = TestBed.createComponent(ProfilsdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
