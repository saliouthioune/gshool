import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemunererComponent } from './remunerer.component';

describe('RemunererComponent', () => {
  let component: RemunererComponent;
  let fixture: ComponentFixture<RemunererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemunererComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemunererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
