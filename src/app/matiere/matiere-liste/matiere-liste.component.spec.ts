import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatiereListeComponent } from './matiere-liste.component';

describe('MatiereListeComponent', () => {
  let component: MatiereListeComponent;
  let fixture: ComponentFixture<MatiereListeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatiereListeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatiereListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
