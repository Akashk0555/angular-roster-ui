import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignTempEmpComponent } from './assign-temp-emp.component';

describe('AssignTempEmpComponent', () => {
  let component: AssignTempEmpComponent;
  let fixture: ComponentFixture<AssignTempEmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AssignTempEmpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignTempEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
