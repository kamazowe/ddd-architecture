import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthCustomerUseCaseChangedPasswordComponent } from './auth-customer-use-case-changed-password.component';

describe('AuthCustomerUseCaseChangedPasswordComponent', () => {
  let component: AuthCustomerUseCaseChangedPasswordComponent;
  let fixture: ComponentFixture<AuthCustomerUseCaseChangedPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthCustomerUseCaseChangedPasswordComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(
      AuthCustomerUseCaseChangedPasswordComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
