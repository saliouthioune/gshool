import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaissiereComponent } from './caissiere.component';

describe('CaissiereComponent', () => {
  let component: CaissiereComponent;
  let fixture: ComponentFixture<CaissiereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaissiereComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaissiereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
