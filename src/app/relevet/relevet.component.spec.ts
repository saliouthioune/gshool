import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelevetComponent } from './relevet.component';

describe('RelevetComponent', () => {
  let component: RelevetComponent;
  let fixture: ComponentFixture<RelevetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelevetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RelevetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
