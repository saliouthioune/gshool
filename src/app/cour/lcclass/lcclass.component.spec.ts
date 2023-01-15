import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LcclassComponent } from './lcclass.component';

describe('LcclassComponent', () => {
  let component: LcclassComponent;
  let fixture: ComponentFixture<LcclassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LcclassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LcclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
