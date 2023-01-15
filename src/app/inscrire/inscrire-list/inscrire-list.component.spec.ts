import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscrireListComponent } from './inscrire-list.component';

describe('InscrireListComponent', () => {
  let component: InscrireListComponent;
  let fixture: ComponentFixture<InscrireListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscrireListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InscrireListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
