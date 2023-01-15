import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClasseiComponent } from './classei.component';

describe('ClasseiComponent', () => {
  let component: ClasseiComponent;
  let fixture: ComponentFixture<ClasseiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClasseiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClasseiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
