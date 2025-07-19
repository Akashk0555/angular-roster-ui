import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignPaycodeComponent } from './assign-paycode.component';

describe('AssignPaycodeComponent', () => {
  let component: AssignPaycodeComponent;
  let fixture: ComponentFixture<AssignPaycodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AssignPaycodeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignPaycodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
