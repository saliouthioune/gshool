import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReleveteiComponent } from './relevetei.component';

describe('ReleveteiComponent', () => {
  let component: ReleveteiComponent;
  let fixture: ComponentFixture<ReleveteiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReleveteiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReleveteiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
