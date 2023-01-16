import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewHeaderComponent } from './view-header.component';
import { svgProviders } from '@ddd-architecture/client/shared/infrastructure/taiga/feature';

describe('ViewHeaderComponent', () => {
  let component: ViewHeaderComponent;
  let fixture: ComponentFixture<ViewHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewHeaderComponent],
      providers: [...svgProviders],
    }).compileComponents();

    fixture = TestBed.createComponent(ViewHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
