import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscrirerelevetComponent } from './inscrirerelevet.component';

describe('InscrirerelevetComponent', () => {
  let component: InscrirerelevetComponent;
  let fixture: ComponentFixture<InscrirerelevetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscrirerelevetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InscrirerelevetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
