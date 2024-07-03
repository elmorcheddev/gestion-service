import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilClinetComponent } from './profil-clinet.component';

describe('ProfilClinetComponent', () => {
  let component: ProfilClinetComponent;
  let fixture: ComponentFixture<ProfilClinetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfilClinetComponent]
    });
    fixture = TestBed.createComponent(ProfilClinetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
