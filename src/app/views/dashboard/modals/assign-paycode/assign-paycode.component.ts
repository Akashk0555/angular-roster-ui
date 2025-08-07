import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-assign-paycode',
  templateUrl: './assign-paycode.component.html',
  styleUrls: ['./assign-paycode.component.scss']
})
export class AssignPaycodeComponent implements OnInit {

  paycodeForm!: FormGroup;
  isOT = false;
  isAllowance = false;

  paycodes = [
    {
      PayCodeId: '1',
      PayCodeName: 'Regular Paycode',
      PayCodeShortName: 'REG',
      Description: 'Test Description',
      ColorCode: '#FF5733',
      PayCodePriority: '1',
      PayCodeCombine: 'Yes',
      PayCodePatternUse: 'Yes',
      PayCodeStatus: 'Active',
      PayCodeType: 'Allowance',
      Deleted: false,
      CreationDate: '2025-07-15T03:57:07.407Z',
      ModificationDate: '2025-07-15T03:57:07.407Z',
      CreatedBy: 'sample-created-user1',
      UpdatedBy: 'sample-updated-user1'
    },
    {
      PayCodeId: '2',
      PayCodeName: 'ON',
      PayCodeShortName: 'ON',
      Description: 'Test Description',
      ColorCode: '#FF5733',
      PayCodePriority: '1',
      PayCodeCombine: 'Yes',
      PayCodePatternUse: 'Yes',
      PayCodeStatus: 'Active',
      PayCodeType: 'OT',
      Deleted: false,
      CreationDate: '2025-07-15T03:57:07.407Z',
      ModificationDate: '2025-07-15T03:57:07.407Z',
      CreatedBy: 'sample-created-user1',
      UpdatedBy: 'sample-updated-user1'
    },
    {
      PayCodeId: '3',
      PayCodeName: 'Travel',
      PayCodeShortName: 'TRA',
      Description: 'Test Description',
      ColorCode: '#FF5733',
      PayCodePriority: '1',
      PayCodeCombine: 'Yes',
      PayCodePatternUse: 'Yes',
      PayCodeStatus: 'Active',
      PayCodeType: 'Allowance',
      Deleted: false,
      CreationDate: '2025-07-15T03:57:07.407Z',
      ModificationDate: '2025-07-15T03:57:07.407Z',
      CreatedBy: 'sample-created-user1',
      UpdatedBy: 'sample-updated-user1'
    }
    // You can add more paycodes as needed
  ];

  constructor(
    private fb: FormBuilder  ) {}

  ngOnInit(): void {
    this.initializeForm();
    this.handlePaycodeSelection();
  }

  private initializeForm(): void {
    this.paycodeForm = this.fb.group({
      paycodename: [],
      shortname: [],
      description: [],
      startdate: [],
      enddate: [],
      allowancetype: [],
      starttime: [],
      endtime: []
    });
  }

  private handlePaycodeSelection(): void {
    this.paycodeForm.get('paycodename')?.valueChanges.subscribe(name => {
      const selected = this.paycodes.find(p => p.PayCodeName === name);
      if (selected) {
        this.paycodeForm.patchValue({
          shortname: selected.PayCodeShortName,
          description: selected.Description
        });

        this.isOT = selected.PayCodeType === 'OT';
        this.isAllowance = selected.PayCodeType === 'Allowance';
      } else {
        this.isOT = false;
        this.isAllowance = false;
      }
    });
  }

  onSubmit(): void {
    if (this.paycodeForm.valid) {
      console.log('Form Submitted:', this.paycodeForm.value);
      // TODO: Add submission logic here
    } else {
      this.paycodeForm.markAllAsTouched();
    }
  }
}