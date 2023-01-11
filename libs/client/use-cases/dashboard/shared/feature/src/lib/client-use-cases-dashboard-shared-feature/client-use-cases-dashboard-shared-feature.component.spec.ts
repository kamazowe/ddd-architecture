import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientUseCasesDashboardSharedFeatureComponent } from './client-use-cases-dashboard-shared-feature.component';

describe('ClientUseCasesDashboardSharedFeatureComponent', () => {
  let component: ClientUseCasesDashboardSharedFeatureComponent;
  let fixture: ComponentFixture<ClientUseCasesDashboardSharedFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientUseCasesDashboardSharedFeatureComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(
      ClientUseCasesDashboardSharedFeatureComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
