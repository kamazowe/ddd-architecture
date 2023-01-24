import { bootstrapApplication } from '@angular/platform-browser';
import {
  ClientCustomerShellComponent,
  rootProviders,
} from '@ddd-architecture/client/customer-shell';

bootstrapApplication(ClientCustomerShellComponent, {
  providers: rootProviders,
}).catch((err) => console.error(err));
