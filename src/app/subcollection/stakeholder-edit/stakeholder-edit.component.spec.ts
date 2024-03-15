import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { StakeholderEditComponent } from './stakeholder-edit.component';
import { AppModule } from '../../app.module';

describe('StakeholderEditComponent', () => {
  let component: StakeholderEditComponent;
  let fixture: ComponentFixture<StakeholderEditComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ StakeholderEditComponent ],
      imports: [AppModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StakeholderEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
