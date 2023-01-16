import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientUseCasesPartListSharedFeatureComponent } from './client-use-cases-part-list-shared-feature.component';
import { svgProviders } from '@ddd-architecture/client/shared/infrastructure/taiga/feature';

describe('ClientUseCasesPartListSharedFeatureComponent', () => {
  let component: ClientUseCasesPartListSharedFeatureComponent;
  let fixture: ComponentFixture<ClientUseCasesPartListSharedFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientUseCasesPartListSharedFeatureComponent],
      providers: [...svgProviders],
    }).compileComponents();

    fixture = TestBed.createComponent(
      ClientUseCasesPartListSharedFeatureComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
