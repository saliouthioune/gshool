import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LipaiementComponent } from './lipaiement.component';

describe('LipaiementComponent', () => {
  let component: LipaiementComponent;
  let fixture: ComponentFixture<LipaiementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LipaiementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LipaiementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
