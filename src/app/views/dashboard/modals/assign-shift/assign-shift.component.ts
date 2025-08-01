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
  assignShiftForm!: FormGroup;
  selectedEmployee: any;
  isOpenShift=false
  shiftnames=[
    {
      "ShiftId": 4,
      "ShiftName": "Evening Shift Fffffffcccc1246",
      "ShiftShortName": "BEC",
      "TypeOfShift": "HOURLY",
      "Description": "Regular morning working hours",
      "ColorCode": "#FFA512",
      "StartTime": "07:00:10.000000",
      "EndTime": "16:00:01.000000",
      "ShiftStatus": "Active",
      "ShiftCombine": "No",
      "Deleted": false,
      "CreationDate": "03-07-2025",
      "ModificationDate": "17-07-2025",
      "CreatedBy": "sample-created-user1",
      "UpdatedBy": "sample-updated-user-2",
      "Duration": "08:59:51"
    },
    {
      "ShiftId": 5,
      "ShiftName": "Evening Shift",
      "ShiftShortName": "BEC",
      "TypeOfShift": "DAILY",
      "Description": "Regular morning working hours",
      "ColorCode": "#FFA456",
      "StartTime": "08:00:00.000000",
      "EndTime": "16:00:00.000000",
      "ShiftStatus": "Active",
      "ShiftCombine": "No",
      "Deleted": false,
      "CreationDate": "03-07-2025",
      "ModificationDate": "03-07-2025",
      "CreatedBy": "sample-created-user1",
      "UpdatedBy": "sample-updated-user1",
      "Duration": "08:00:00"
    },
    {
      "ShiftId": 6,
      "ShiftName": "Evening Shift1",
      "ShiftShortName": "BEC",
      "TypeOfShift": "DAILY",
      "Description": "Regular morning working hours",
      "ColorCode": "#FFA457",
      "StartTime": "07:00:00.000000",
      "EndTime": "16:00:00.000000",
      "ShiftStatus": "Active",
      "ShiftCombine": "No",
      "Deleted": false,
      "CreationDate": "03-07-2025",
      "ModificationDate": "03-07-2025",
      "CreatedBy": "sample-created-user1",
      "UpdatedBy": "sample-updated-user1",
      "Duration": "09:00:00"
    },
    {
      "ShiftId": 7,
      "ShiftName": "Evening Shift2",
      "ShiftShortName": "BEC",
      "TypeOfShift": "DAILY",
      "Description": "Regular morning working hours",
      "ColorCode": "#FFA459",
      "StartTime": "07:00:00.000000",
      "EndTime": "16:00:00.000000",
      "ShiftStatus": "Active",
      "ShiftCombine": "No",
      "Deleted": false,
      "CreationDate": "15-07-2025",
      "ModificationDate": "15-07-2025",
      "CreatedBy": "sample-created-user1",
      "UpdatedBy": "sample-updated-user1",
      "Duration": "09:00:00"
    },
    {
      "ShiftId": 8,
      "ShiftName": "Evening Shift3",
      "ShiftShortName": "BEC",
      "TypeOfShift": "DAILY",
      "Description": "Regular morning working hours",
      "ColorCode": "#FFA469",
      "StartTime": "07:10:00.000000",
      "EndTime": "16:35:00.000000",
      "ShiftStatus": "Active",
      "ShiftCombine": "No",
      "Deleted": false,
      "CreationDate": "15-07-2025",
      "ModificationDate": "15-07-2025",
      "CreatedBy": "sample-created-user1",
      "UpdatedBy": "sample-updated-user1",
      "Duration": "09:25:00"
    },
    {
      "ShiftId": 9,
      "ShiftName": "Evening Shift4",
      "ShiftShortName": "BEC",
      "TypeOfShift": "DAILY",
      "Description": "Regular morning working hours",
      "ColorCode": "#FFA479",
      "StartTime": "08:10:10.000000",
      "EndTime": "08:35:40.000000",
      "ShiftStatus": "Active",
      "ShiftCombine": "No",
      "Deleted": false,
      "CreationDate": "15-07-2025",
      "ModificationDate": "15-07-2025",
      "CreatedBy": "sample-created-user1",
      "UpdatedBy": "sample-updated-user1",
      "Duration": "00:25:30"
    },
    {
      "ShiftId": 10,
      "ShiftName": "Evening Shift1z",
      "ShiftShortName": "BEC",
      "TypeOfShift": "DAILY",
      "Description": "Regular morning working hours",
      "ColorCode": "#FFA437",
      "StartTime": "07:00:10.000000",
      "EndTime": "16:00:00.000000",
      "ShiftStatus": "Active",
      "ShiftCombine": "No",
      "Deleted": false,
      "CreationDate": "16-07-2025",
      "ModificationDate": "17-07-2025",
      "CreatedBy": "sample-created-user1",
      "UpdatedBy": "sample-updated-user-2",
      "Duration": "08:59:50"
    },
    {
      "ShiftId": 11,
      "ShiftName": "Lllll",
      "ShiftShortName": "BEC",
      "TypeOfShift": "DAILY",
      "Description": "Regular morning working hours",
      "ColorCode": "#FFA436",
      "StartTime": "16:00:00.000000",
      "EndTime": "07:00:10.000000",
      "ShiftStatus": "Active",
      "ShiftCombine": "No",
      "Deleted": false,
      "CreationDate": "16-07-2025",
      "ModificationDate": "16-07-2025",
      "CreatedBy": "sample-created-user1",
      "UpdatedBy": "sample-updated-user1",
      "Duration": "15:00:10"
    },
    {
      "ShiftId": 12,
      "ShiftName": "Llllll",
      "ShiftShortName": "BEC",
      "TypeOfShift": "DAILY",
      "Description": "Regular morning working hours",
      "ColorCode": "#FFA496",
      "StartTime": "16:00:25.000000",
      "EndTime": "07:00:10.000000",
      "ShiftStatus": "Active",
      "ShiftCombine": "No",
      "Deleted": false,
      "CreationDate": "16-07-2025",
      "ModificationDate": "16-07-2025",
      "CreatedBy": "sample-created-user1",
      "UpdatedBy": "sample-updated-user1",
      "Duration": "14:59:45"
    },
    {
      "ShiftId": 13,
      "ShiftName": "Lllllssl",
      "ShiftShortName": "BEC",
      "TypeOfShift": "DAILY",
      "Description": "Regular morning working hours",
      "ColorCode": "#FFA466",
      "StartTime": "16:00:02.000000",
      "EndTime": "07:00:10.000000",
      "ShiftStatus": "Active",
      "ShiftCombine": "No",
      "Deleted": false,
      "CreationDate": "17-07-2025",
      "ModificationDate": "17-07-2025",
      "CreatedBy": "sample-created-user1",
      "UpdatedBy": "sample-updated-user1",
      "Duration": "15:00:08"
    }
  ]

  constructor(private fb: FormBuilder,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}
  ngAfterViewInit(): void {
   
  }

  ngOnInit(): void {
    this.assignShiftForm=this.fb.group({
      shiftname:[null,Validators.required],
      shortname:[],
      startdate:[],
      enddate:[],
      setstarttime:[],
      setendtime:[],
      actualstarttime:[],
      actualendtime:[],
      shifttype:[],
      description:[],
      openshift:[],
      publishto:[]
      });

      this.assignShiftForm.get('shiftname')?.valueChanges.subscribe(id => {
        const selected = this.shiftnames.find(p => p.ShiftName === id);
        if (selected) {
          this.assignShiftForm.patchValue({
            shortname: selected.ShiftShortName,
            description: selected.Description,
            //startdate: selected.StartTime,
           // enddate: selected.enddate,
           // allowancetype: selected,
            setstarttime: selected.StartTime.slice(0,5),
            setendtime: selected.EndTime.slice(0,5),
            shifttype:selected.TypeOfShift
            //paycodetype: selected.paycodetype
          });
        }
      });
  }

  showAlert(event: Event): void {
  this.isOpenShift = (event.target as HTMLInputElement).checked;
  console.log(this.isOpenShift)
  
}



  onSubmit(): void {
    if (this.assignShiftForm.valid) {
      console.log('Form Submitted:', this.assignShiftForm.value);
      // TODO: add login logic
    } else {
      this.assignShiftForm.markAllAsTouched();
    }
  }

  get shiftname() {
    return this.assignShiftForm.get('shiftname');
  }
  get enddate() {
    return this.assignShiftForm.get('enddate');
  }
  get startdate() {
    return this.assignShiftForm.get('startdate');
  }

  get setstarttime() {
    return this.assignShiftForm.get('setstarttime');
  }

 
  get actualstarttime() {
    return this.assignShiftForm.get('actualstarttime');
  }
  
  get shortname(){
    return this.assignShiftForm.get('shortname');
  }
  get setendtime(){
    return this.assignShiftForm.get('setendtime');
  }
  get actualendtime(){
    return this.assignShiftForm.get('actualendtime');
  }
  get shifttype(){
    return this.assignShiftForm.get('shifttype');
  }
  get description(){
    return this.assignShiftForm.get('description');
  }
  
  

}