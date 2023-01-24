import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Breakpoint } from './breakpoint.enum';

@Injectable()
export class BreakpointsObserver {
  // todo refactoring
  private readonly observer$ = this.breakpointObserver
    .observe([Breakpoint.small, Breakpoint.medium, Breakpoint.large])
    .pipe(
      map(
        (data) =>
          Object.entries(data.breakpoints).find((x) => x[1])?.[0] as
            | Breakpoint
            | undefined
      )
    );

  // todo isDefined util
  readonly isMobile$ = this.observer$.pipe(
    map((value) =>
      value ? [Breakpoint.small, Breakpoint.medium].includes(value) : false
    )
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
