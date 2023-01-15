import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaiementeiComponent } from './paiementei.component';

describe('PaiementeiComponent', () => {
  let component: PaiementeiComponent;
  let fixture: ComponentFixture<PaiementeiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaiementeiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaiementeiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
