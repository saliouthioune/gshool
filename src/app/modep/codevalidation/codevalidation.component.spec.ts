import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodevalidationComponent } from './codevalidation.component';

describe('CodevalidationComponent', () => {
  let component: CodevalidationComponent;
  let fixture: ComponentFixture<CodevalidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodevalidationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CodevalidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
