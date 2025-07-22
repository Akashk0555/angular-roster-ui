import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrevUsedPatternComponent } from './prev-used-pattern.component';

describe('PrevUsedPatternComponent', () => {
  let component: PrevUsedPatternComponent;
  let fixture: ComponentFixture<PrevUsedPatternComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrevUsedPatternComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrevUsedPatternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
