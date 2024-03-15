import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { StakeholderCreateComponent } from './stakeholder-create.component';
import { AppModule } from '../../app.module';

describe('StakeholderCreateComponent', () => {
  let component: StakeholderCreateComponent;
  let fixture: ComponentFixture<StakeholderCreateComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ StakeholderCreateComponent ],
      imports: [AppModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StakeholderCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
