import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AuthEffects } from './auth.effects';
import { AuthDataService } from '../services/auth-data.service';
import { EntryPointsNavigatorService } from '@ddd-architecture/client/shared/infrastructure/router';
import { AuthTokenService } from '@ddd-architecture/client/shared/infrastructure/auth-token';

describe('AuthEffects', () => {
  let actions$: Observable<any>;
  let effects: AuthEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        AuthEffects,
        {
          provide: AuthDataService,
          useValue: jest.fn().mockImplementation(() => {
            return { login: (obj: unknown) => of({ token: 'test' }) };
          }),
        },
        {
          provide: EntryPointsNavigatorService,
          useValue: jest.fn().mockImplementation(() => {
            return {
              // eslint-disable-next-line @typescript-eslint/no-empty-function
              goToLoginPage: (obj: unknown) => {},
            };
          }),
        },
        {
          provide: AuthTokenService,
          useValue: jest.fn().mockImplementation(() => {
            return {
              // eslint-disable-next-line @typescript-eslint/no-empty-function
              login: (obj: unknown) => {},
              // eslint-disable-next-line @typescript-eslint/no-empty-function
              logout: () => {},
            };
          }),
        },
        provideMockActions(() => actions$),
      ],
    });

    effects = TestBed.inject(AuthEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
