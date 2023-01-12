import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientUseCasesPartListCustomerUseCaseComponent } from './client-use-cases-part-list-customer-use-case.component';

describe('ClientUseCasesPartListCustomerUseCaseComponent', () => {
  let component: ClientUseCasesPartListCustomerUseCaseComponent;
  let fixture: ComponentFixture<ClientUseCasesPartListCustomerUseCaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientUseCasesPartListCustomerUseCaseComponent],
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
