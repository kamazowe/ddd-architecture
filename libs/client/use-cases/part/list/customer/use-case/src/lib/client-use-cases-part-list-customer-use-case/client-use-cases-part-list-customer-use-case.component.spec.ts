import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientUseCasesPartListCustomerUseCaseComponent } from './client-use-cases-part-list-customer-use-case.component';
import { svgProviders } from '@ddd-architecture/client/shared/infrastructure/taiga/feature';

describe('ClientUseCasesPartListCustomerUseCaseComponent', () => {
  let component: ClientUseCasesPartListCustomerUseCaseComponent;
  let fixture: ComponentFixture<ClientUseCasesPartListCustomerUseCaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientUseCasesPartListCustomerUseCaseComponent],
      providers: [...svgProviders],
    }).compileComponents();

    fixture = TestBed.createComponent(
      ClientUseCasesPartListCustomerUseCaseComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
