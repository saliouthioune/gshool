import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumerotelComponent } from './numerotel.component';

describe('NumerotelComponent', () => {
  let component: NumerotelComponent;
  let fixture: ComponentFixture<NumerotelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumerotelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumerotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
