import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignPatternComponent } from './assign-pattern.component';

describe('AssignPatternComponent', () => {
  let component: AssignPatternComponent;
  let fixture: ComponentFixture<AssignPatternComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AssignPatternComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignPatternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
