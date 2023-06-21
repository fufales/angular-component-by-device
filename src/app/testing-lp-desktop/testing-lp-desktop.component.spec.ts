import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingLpDesktopComponent } from './testing-lp-desktop.component';

describe('TestingLpDesktopComponent', () => {
  let component: TestingLpDesktopComponent;
  let fixture: ComponentFixture<TestingLpDesktopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestingLpDesktopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestingLpDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
