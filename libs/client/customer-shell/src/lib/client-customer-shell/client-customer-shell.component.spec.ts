import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClientCustomerShellComponent } from './client-customer-shell.component';
import { TuiRootModule } from '@taiga-ui/core';

describe('ClientCustomerShellComponent', () => {
  let component: ClientCustomerShellComponent;
  let fixture: ComponentFixture<ClientCustomerShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        BrowserModule,
        BrowserAnimationsModule,
        TuiRootModule,
        ClientCustomerShellComponent,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ClientCustomerShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
