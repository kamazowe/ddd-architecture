import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientUseCasesDashboardCustomerUseCaseComponent } from './client-use-cases-dashboard-customer-use-case.component';

describe('ClientUseCasesDashboardCustomerUseCaseComponent', () => {
  let component: ClientUseCasesDashboardCustomerUseCaseComponent;
  let fixture: ComponentFixture<ClientUseCasesDashboardCustomerUseCaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientUseCasesDashboardCustomerUseCaseComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(
      ClientUseCasesDashboardCustomerUseCaseComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
