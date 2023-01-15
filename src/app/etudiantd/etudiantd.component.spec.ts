import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtudiantdComponent } from './etudiantd.component';

describe('EtudiantdComponent', () => {
  let component: EtudiantdComponent;
  let fixture: ComponentFixture<EtudiantdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EtudiantdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EtudiantdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
