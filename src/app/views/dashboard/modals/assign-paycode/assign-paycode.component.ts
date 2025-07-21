import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-assign-paycode',
  templateUrl: './assign-paycode.component.html',
  styleUrl: './assign-paycode.component.scss'
})
export class AssignPaycodeComponent implements OnInit {
  
  paycodeForm!: FormGroup;
  showStartDateOnly = false;
  paycode=[
    {
  "paycodename": "Regular Shift",
  "shortname": "REG",
  paycodetype:'OT',
  "description": "Standard working shift for all employees",
  "startdate": "2025-07-01",
  "enddate": "2025-12-31",
  "allowancetype": '1',
  "starttime": "09:00",
  "endtime": "18:00"
},
  {
    id: 2,
    paycodename: 'Night Shift',
    paycodetype:'Allowance',
    shortname: 'NGT',
    description: 'Night working hours',
    startdate: '2025-07-15',
    enddate: '2025-12-31',
    allowancetype: '2', // "My Access"
    starttime: '21:00',
    endtime: '06:00'
  }
  ]
  employees = [
    { id: 1, name: 'Alice', email: 'alice@example.com', department: 'HR' },
    { id: 2, name: 'Bob', email: 'bob@example.com', department: 'IT' },
    { id: 3, name: 'Charlie', email: 'charlie@example.com', department: 'Finance' }
  ]; // dropdown options
  constructor(private fb: FormBuilder,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    this.paycodeForm = this.fb.group({
      paycodename:[],
      paycodetype:[],
      shortname:[],
      description:[],
      startdate:[],
      enddate:[],
      allowancetype:[],
      starttime:[],
      endtime:[]
    });

    this.paycodeForm.get('paycodename')?.valueChanges.subscribe(id => {
    const selected = this.paycode.find(p => p.paycodename === id);
    if (selected) {
      this.paycodeForm.patchValue({
        shortname: selected.shortname,
        description: selected.description,
        startdate: selected.startdate,
        enddate: selected.enddate,
        allowancetype: selected.allowancetype,
        starttime: selected.starttime,
        endtime: selected.endtime,
        paycodetype: selected.paycodetype
      });

      this.showStartDateOnly = selected.paycodetype === 'OT';
    }
  });

  }
  onSubmit(): void {
    if (this.paycodeForm.valid) {
      console.log('Form Submitted:', this.paycodeForm.value);
      // TODO: add login logic
    } else {
      this.paycodeForm.markAllAsTouched();
    }
  }
}
