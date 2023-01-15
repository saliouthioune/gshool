import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatimentListComponent } from './batiment-list.component';

describe('BatimentListComponent', () => {
  let component: BatimentListComponent;
  let fixture: ComponentFixture<BatimentListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BatimentListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BatimentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
