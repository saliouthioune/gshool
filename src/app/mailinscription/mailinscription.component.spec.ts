import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MailinscriptionComponent } from './mailinscription.component';

describe('MailinscriptionComponent', () => {
  let component: MailinscriptionComponent;
  let fixture: ComponentFixture<MailinscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MailinscriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MailinscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
