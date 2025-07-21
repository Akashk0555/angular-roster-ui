import { isPlatformBrowser } from '@angular/common';
import { AfterViewChecked, AfterViewInit, Component, ElementRef, Inject, OnInit, PLATFORM_ID, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import flatpickr from 'flatpickr';
@Component({
  selector: 'app-assign-shift',
  templateUrl: './assign-shift.component.html',
  styleUrl: './assign-shift.component.scss'
})
export class AssignShiftComponent implements OnInit , AfterViewInit{
  loginForm!: FormGroup;
  selectedEmployee: any;
  employees = [
    { id: 1, name: 'Alice', email: 'alice@example.com', department: 'HR' },
    { id: 2, name: 'Bob', email: 'bob@example.com', department: 'IT' },
    { id: 3, name: 'Charlie', email: 'charlie@example.com', department: 'Finance' }
  ]; // dropdown options
  
  @ViewChild('calendarstartdate') calendarStartDate!:ElementRef;
  private flatpickrIns:any;
  constructor(private fb: FormBuilder,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}
  ngAfterViewInit(): void {

    if (isPlatformBrowser(this.platformId)) {
      this.flatpickrIns = flatpickr(this.calendarStartDate.nativeElement,{
      clickOpens:false,
      dateFormat:"d-M-Y",
    })
    }
  }
 openCal():void{
  this.flatpickrIns.open();
 }
  

  ngOnInit(): void {
    this.loginForm = this.fb.group({
    // email: ['', [Validators.required, Validators.email]],
      setstarttime: ['', Validators.required],
      role: [null, Validators.required] ,
      actualstarttime: ['', Validators.required],
      date: ['', Validators.required],
      shortname:[],
      setendtime:[],
      actualendtime:[],
      shifttype:[],
      description:[],
      employeeId: [null]
    });

    this.loginForm.get('employeeId')?.valueChanges.subscribe(employeeId => {
      this.selectedEmployee=this.employees.find(e=>e.id===employeeId);
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      console.log('Form Submitted:', this.loginForm.value);
      // TODO: add login logic
    } else {
      this.loginForm.markAllAsTouched();
    }
  }

  get email() {
    return this.loginForm.get('email');
  }

  get setstarttime() {
    return this.loginForm.get('setstarttime');
  }

  get role() {
    return this.loginForm.get('role');
  }
  get actualstarttime() {
    return this.loginForm.get('actualstarttime');
  }
  get date() {
    return this.loginForm.get('date');
  }
  get shortname(){
    return this.loginForm.get('shortname');
  }
  get setendtime(){
    return this.loginForm.get('setendtime');
  }
  get actualendtime(){
    return this.loginForm.get('actualendtime');
  }
  get shifttype(){
    return this.loginForm.get('shifttype');
  }
  get description(){
    return this.loginForm.get('description');
  }
  

}