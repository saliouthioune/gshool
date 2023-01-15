import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumcbqComponent } from './numcbq.component';

describe('NumcbqComponent', () => {
  let component: NumcbqComponent;
  let fixture: ComponentFixture<NumcbqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumcbqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumcbqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
