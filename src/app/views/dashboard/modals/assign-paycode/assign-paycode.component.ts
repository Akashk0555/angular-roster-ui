import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-assign-paycode',
  templateUrl: './assign-paycode.component.html',
  styleUrl: './assign-paycode.component.scss'
})
export class AssignPaycodeComponent implements OnInit {
  
  paycodeForm!: FormGroup;
  isOT = false;
  isAllowance=false;


  paycodes= [
    {
      "PayCodeId": "1",
      "PayCodeName": "Regular Paycode",
      "PayCodeShortName": "REG",
      "Description": "Test Description",
      "ColorCode": "#FF5733",
      "PayCodePriority": "1",
      "PayCodeCombine": "Yes",
      "PayCodePatternUse": "Yes",
      "PayCodeStatus": "Active",
      "PayCodeType": "Allowance",
      "Deleted": false,
      "CreationDate": "2025-07-15T03:57:07.407Z",
      "ModificationDate": "2025-07-15T03:57:07.407Z",
      "CreatedBy": "sample-created-user1",
      "UpdatedBy": "sample-updated-user1"
    },
    {
      "PayCodeId": "2",
      "PayCodeName": "ON",
      "PayCodeShortName": "ON",
      "Description": "Test Description",
      "ColorCode": "#FF5733",
      "PayCodePriority": "1",
      "PayCodeCombine": "Yes",
      "PayCodePatternUse": "Yes",
      "PayCodeStatus": "Active",
      "PayCodeType": "OT",
      "Deleted": false,
      "CreationDate": "2025-07-15T03:57:07.407Z",
      "ModificationDate": "2025-07-15T03:57:07.407Z",
      "CreatedBy": "sample-created-user1",
      "UpdatedBy": "sample-updated-user1"
    },
    {
      "PayCodeId": "3",
      "PayCodeName": "Travel",
      "PayCodeShortName": "TRA",
      "Description": "Test Description",
      "ColorCode": "#FF5733",
      "PayCodePriority": "1",
      "PayCodeCombine": "Yes",
      "PayCodePatternUse": "Yes",
      "PayCodeStatus": "Active",
      "PayCodeType": "Allowance",
      "Deleted": false,
      "CreationDate": "2025-07-15T03:57:07.407Z",
      "ModificationDate": "2025-07-15T03:57:07.407Z",
      "CreatedBy": "sample-created-user1",
      "UpdatedBy": "sample-updated-user1"
    },
    {
      "PayCodeId": "4",
      "PayCodeName": "Regular Paycode",
      "PayCodeShortName": "REG",
      "Description": "Test Description",
      "ColorCode": "#FF5733",
      "PayCodePriority": "1",
      "PayCodeCombine": "Yes",
      "PayCodePatternUse": "Yes",
      "PayCodeStatus": "Active",
      "PayCodeType": "Allowance",
      "Deleted": false,
      "CreationDate": "2025-07-15T03:57:07.407Z",
      "ModificationDate": "2025-07-15T03:57:07.407Z",
      "CreatedBy": "sample-created-user1",
      "UpdatedBy": "sample-updated-user1"
    },
    {
      "PayCodeId": "5",
      "PayCodeName": "Regular Paycode",
      "PayCodeShortName": "REG",
      "Description": "Test Description",
      "ColorCode": "#FF5733",
      "PayCodePriority": "1",
      "PayCodeCombine": "Yes",
      "PayCodePatternUse": "Yes",
      "PayCodeStatus": "Active",
      "PayCodeType": "Allowance",
      "Deleted": false,
      "CreationDate": "2025-07-15T03:57:07.407Z",
      "ModificationDate": "2025-07-15T03:57:07.407Z",
      "CreatedBy": "sample-created-user1",
      "UpdatedBy": "sample-updated-user1"
    },
    {
      "PayCodeId": "6",
      "PayCodeName": "Regular Paycode",
      "PayCodeShortName": "REG",
      "Description": "Test Description",
      "ColorCode": "#FF5733",
      "PayCodePriority": "1",
      "PayCodeCombine": "Yes",
      "PayCodePatternUse": "Yes",
      "PayCodeStatus": "Active",
      "PayCodeType": "Allowance",
      "Deleted": false,
      "CreationDate": "2025-07-15T03:57:07.407Z",
      "ModificationDate": "2025-07-15T03:57:07.407Z",
      "CreatedBy": "sample-created-user1",
      "UpdatedBy": "sample-updated-user1"
    }
  ]
  
   // dropdown options
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

    this.paycodeForm.get('paycodename')?.valueChanges.subscribe(id => {
      const selected = this.paycodes.find(p => p.PayCodeName === id);
      if (selected) {
        this.paycodeForm.patchValue({
          shortname: selected.PayCodeShortName,
          description: selected.Description,
          //startdate: selected.,
          //enddate: selected.enddate,
          //allowancetype: selected.PayCodeType,
          //starttime: selected.starttime,
         // endtime: selected.endtime,
         // paycodetype: selected.paycodetype
        });
  
        this.isOT = selected.PayCodeType === 'OT';
        this.isAllowance = selected.PayCodeType === 'Allowance';
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
