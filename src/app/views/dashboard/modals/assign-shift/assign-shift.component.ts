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
  roles = [
  { label: 'Admin', value: 'admin' },
  { label: 'User', value: 'user' },
  { label: 'Manager', value: 'manager' }
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
      email: ['', [Validators.required, Validators.email]],
      setstarttime: ['', Validators.required],
      role: [null, Validators.required] ,
      actualstarttime: ['', Validators.required],
      date: ['', Validators.required]
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
    return this.loginForm.get('time');
  }
  get date() {
    return this.loginForm.get('date');
  }

  

}