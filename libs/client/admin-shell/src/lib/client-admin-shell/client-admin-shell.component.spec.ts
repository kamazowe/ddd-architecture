import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientAdminShellComponent } from './client-admin-shell.component';

describe('ClientAdminShellComponent', () => {
  let component: ClientAdminShellComponent;
  let fixture: ComponentFixture<ClientAdminShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientAdminShellComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ClientAdminShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
