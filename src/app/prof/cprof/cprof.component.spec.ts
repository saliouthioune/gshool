import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CprofComponent } from './cprof.component';

describe('CprofComponent', () => {
  let component: CprofComponent;
  let fixture: ComponentFixture<CprofComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CprofComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CprofComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
