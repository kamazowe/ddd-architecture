import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientUseCasesDashboardAdminUseCaseComponent } from './client-use-cases-dashboard-admin-use-case.component';

describe('ClientUseCasesDashboardAdminUseCaseComponent', () => {
  let component: ClientUseCasesDashboardAdminUseCaseComponent;
  let fixture: ComponentFixture<ClientUseCasesDashboardAdminUseCaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientUseCasesDashboardAdminUseCaseComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(
      ClientUseCasesDashboardAdminUseCaseComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
