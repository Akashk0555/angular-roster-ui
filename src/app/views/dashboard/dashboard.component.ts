import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {
  patternForm!: FormGroup;

  initialData = {
    PatternId: '1',
    PatternName: 'Regular Paycode',
    PatternShortName: 'REG',
    Description: 'Test Description',
    PatternSchedule: [
      { Day: 1, PayCodes: ['REG', 'OT'], Shift: 'Morning' },
      { Day: 2, PayCodes: ['REG'], Shift: 'Morning' },
      { Day: 3, PayCodes: ['REG', 'LEAVE'], Shift: 'Morning' },
      { Day: 4, PayCodes: ['REG'], Shift: 'Morning' },
      { Day: 5, PayCodes: ['REG', 'OT'], Shift: 'Morning' },
      { Day: 6, PayCodes: ['REG'], Shift: 'Morning' },
      { Day: 7, PayCodes: ['REG'], Shift: 'Morning' }
    ]
  };

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.patternForm = this.fb.group({
      PatternId: [this.initialData.PatternId],
      PatternName: [this.initialData.PatternName],
      PatternShortName: [this.initialData.PatternShortName],
      Description: [this.initialData.Description],
      PatternSchedule: this.fb.array([])
    });

    this.setPatternSchedule(this.initialData.PatternSchedule);
  }

  get patternSchedule(): FormArray {
    return this.patternForm.get('PatternSchedule') as FormArray;
  }

  setPatternSchedule(schedule: any[]) {
    const formArray = this.patternSchedule;
    schedule.forEach(day => {
      formArray.push(
        this.fb.group({
          Day: [day.Day],
          PayCodes: [day.PayCodes],
          Shift: [day.Shift]
        })
      );
    });
  }

  getPayCodesValue(index: number): string {
    const control = this.patternSchedule.at(index).get('PayCodes');
    const payCodes = control?.value;
    return Array.isArray(payCodes) ? payCodes.join(', ') : '';
  }

  // updatePayCodes(index: number, value: string) {
  //   const control = this.patternSchedule.at(index).get('PayCodes');
  //   if (control) {
  //     const paycodes = value
  //       .split(',')
  //       .map(p => p.trim())
  //       .filter(p => p !== '');
  //     control.setValue(paycodes);
  //   }
  // }

  onSubmit() {
    console.log(this.patternForm.value);
  }

}
