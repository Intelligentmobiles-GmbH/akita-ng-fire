import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CatalogSelectionComponent } from './catalog-selection.component';
import { AppModule } from '../../app.module';

describe('CatalogSelectionComponent', () => {
  let component: CatalogSelectionComponent;
  let fixture: ComponentFixture<CatalogSelectionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogSelectionComponent ],
      imports: [AppModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
