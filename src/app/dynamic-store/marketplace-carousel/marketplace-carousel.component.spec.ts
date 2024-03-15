import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MarketplaceCarouselComponent } from './marketplace-carousel.component';
import { AppModule } from '../../app.module';

describe('MarketplaceCarouselComponent', () => {
  let component: MarketplaceCarouselComponent;
  let fixture: ComponentFixture<MarketplaceCarouselComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MarketplaceCarouselComponent ],
      imports: [AppModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketplaceCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
