import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {
  employeeForm!: FormGroup;
  selectedEmployee: any;
  selectedDate: Date;
 
  employees = [
    { id: 1, name: 'Alice', email: 'alice@example.com', department: 'HR' },
    { id: 2, name: 'Bob', email: 'bob@example.com', department: 'IT' },
    { id: 3, name: 'Charlie', email: 'charlie@example.com', department: 'Finance' }
  ];
  
 
  constructor(private fb: FormBuilder) {}
 
 
  



  ngOnInit() {
this.employeeForm = this.fb.group({
      employeeId: [null]
    });
 
    // Optional: react to value changes
    this.employeeForm.get('employeeId')?.valueChanges.subscribe(employeeId => {
      this.selectedEmployee=this.employees.find(e=>e.id===employeeId);
    });
  }
  



}
