import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TuiRootModule } from '@taiga-ui/core';
import { provideRouter } from '@angular/router';
import {
  ClientCustomerShellComponent,
  shellRoutes,
} from '@ddd-architecture/client/customer-shell';

bootstrapApplication(ClientCustomerShellComponent, {
  providers: [
    importProvidersFrom([
      BrowserModule,
      BrowserAnimationsModule,
      TuiRootModule,
    ]),
    provideRouter(shellRoutes),
  ],
}).catch((err) => console.error(err));
