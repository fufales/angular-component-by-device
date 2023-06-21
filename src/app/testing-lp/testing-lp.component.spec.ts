import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingLpComponent } from './testing-lp.component';

describe('TestingLpComponent', () => {
  let component: TestingLpComponent;
  let fixture: ComponentFixture<TestingLpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestingLpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestingLpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
