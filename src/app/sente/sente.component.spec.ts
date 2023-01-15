import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SenteComponent } from './sente.component';

describe('SenteComponent', () => {
  let component: SenteComponent;
  let fixture: ComponentFixture<SenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
