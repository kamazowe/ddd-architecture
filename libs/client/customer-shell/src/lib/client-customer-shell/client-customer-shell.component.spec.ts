import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientCustomerShellComponent } from './client-customer-shell.component';

describe('ClientCustomerShellComponent', () => {
  let component: ClientCustomerShellComponent;
  let fixture: ComponentFixture<ClientCustomerShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientCustomerShellComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ClientCustomerShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
