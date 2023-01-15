import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnneesListComponent } from './annees-list.component';

describe('AnneesListComponent', () => {
  let component: AnneesListComponent;
  let fixture: ComponentFixture<AnneesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnneesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnneesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
