import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientUseCasesPartListSharedFeatureComponent } from './client-use-cases-part-list-shared-feature.component';

describe('ClientUseCasesPartListSharedFeatureComponent', () => {
  let component: ClientUseCasesPartListSharedFeatureComponent;
  let fixture: ComponentFixture<ClientUseCasesPartListSharedFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientUseCasesPartListSharedFeatureComponent],
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
