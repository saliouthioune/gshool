import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModepComponent } from './modep.component';

describe('ModepComponent', () => {
  let component: ModepComponent;
  let fixture: ComponentFixture<ModepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
