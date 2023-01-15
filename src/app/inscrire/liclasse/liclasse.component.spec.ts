import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiclasseComponent } from './liclasse.component';

describe('LiclasseComponent', () => {
  let component: LiclasseComponent;
  let fixture: ComponentFixture<LiclasseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiclasseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LiclasseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
