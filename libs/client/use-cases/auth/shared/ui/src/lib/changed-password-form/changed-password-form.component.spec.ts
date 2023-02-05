import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangedPasswordFormComponent } from './changed-password-form.component';

describe('ChangedPasswordFormComponent', () => {
  let component: ChangedPasswordFormComponent;
  let fixture: ComponentFixture<ChangedPasswordFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChangedPasswordFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ChangedPasswordFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
