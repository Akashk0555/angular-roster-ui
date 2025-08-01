import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatedVersPattComponent } from './updated-vers-patt.component';

describe('UpdatedVersPattComponent', () => {
  let component: UpdatedVersPattComponent;
  let fixture: ComponentFixture<UpdatedVersPattComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdatedVersPattComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatedVersPattComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
