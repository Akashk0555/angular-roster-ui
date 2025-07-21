import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-assign-paycode',
  templateUrl: './assign-paycode.component.html',
  styleUrl: './assign-paycode.component.scss'
})
export class AssignPaycodeComponent implements OnInit {
  
  paycodeForm!: FormGroup;

  
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
      shortname:[],
      description:[],
      startdate:[],
      enddate:[],
      allowancetype:[],
      starttime:[],
      endtime:[]
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
