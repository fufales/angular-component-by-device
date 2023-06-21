import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingLpMobileComponent } from './testing-lp-mobile.component';

describe('TestingLpMobileComponent', () => {
  let component: TestingLpMobileComponent;
  let fixture: ComponentFixture<TestingLpMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestingLpMobileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestingLpMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
