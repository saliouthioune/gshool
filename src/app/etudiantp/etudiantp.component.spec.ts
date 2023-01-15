import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtudiantpComponent } from './etudiantp.component';

describe('EtudiantpComponent', () => {
  let component: EtudiantpComponent;
  let fixture: ComponentFixture<EtudiantpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EtudiantpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EtudiantpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
