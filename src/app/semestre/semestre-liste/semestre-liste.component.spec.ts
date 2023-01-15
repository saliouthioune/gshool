import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SemestreListeComponent } from './semestre-liste.component';

describe('SemestreListeComponent', () => {
  let component: SemestreListeComponent;
  let fixture: ComponentFixture<SemestreListeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SemestreListeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SemestreListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
