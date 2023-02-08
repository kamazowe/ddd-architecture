import { Injectable } from '@angular/core';
import { isDefined } from '@ddd-architecture/shared/utils';
import { Token } from '@ddd-architecture/shared/contracts';
import { BrowserStorageService } from '@ddd-architecture/client/shared/infrastructure/storage';

@Injectable()
export class AuthTokenService {
  private readonly storageKey = 'ddd_token';

  constructor(private storage: BrowserStorageService) {}

  isLoggedInUser(): boolean {
    return isDefined(this.getToken());
  }

  isNotLoggedInUser(): boolean {
    return !this.isLoggedInUser();
  }

  login(value: Token): void {
    this.setToken(value);
  }

  logout(): void {
    this.clearToken();
  }

  getToken(): Token | null {
    return this.storage.get(this.storageKey) ?? null;
  }

  private setToken(value: Token): void {
    this.storage.set(this.storageKey, value);
  }

  private clearToken(): void {
    this.storage.remove(this.storageKey);
  }
}
