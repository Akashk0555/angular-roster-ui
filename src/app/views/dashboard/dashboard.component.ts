import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { Observable } from 'rxjs';




@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})


export class DashboardComponent implements OnInit {
  
  constructor(private fb: FormBuilder) {}
  Pattern:any[]=[]
  ngOnInit(): void {
    
   
  }

  patterns= [
    {
      "PatternId": 4,
      "PatternName": "Pattern One",
      "PatternStatus": "Pending",
      "Description": "This is a test pattern",
      "Recurring": "WEEKS",
      "Days": 12,
      "TypeOfPattern": "DAILY",
      "Public": true,
      "Deleted": false,
      "Comments": "Auto approved",
      "IsApproved": "0",
      "ApprovedBy": "admin_user",
      "PatternVersion": 2,
      "CreationDate": "10-07-2025",
      "ModificationDate": "10-07-2025",
      "CreatedBy": "sample-created-user1",
      "UpdatedBy": "sample-updated-user-2",
      "ShiftPatternDetails": [
        {
          "ShiftPatternId": 4,
          "PatternId": 4,
          "Shift": {
            "TypeOfShift": "DAILY",
            "ShiftName": "General Shift",
            "ShiftShortName": "GEN",
            "Description": "Shift for general duties",
            "ColorCode": "#3920b5ff",
            "StartTime": "09:00:00",
            "EndTime": "18:00:00",
            "ShiftStatus": "Active"
          },
          "PayCodes": [
            {
              "PayCodeName": "Paycode1",
              "PayCodeShortname": "PC1",
              "Description": "Basic pay",
              "ColorCode": "#00FF00",
              "PayCodePriority": 1,
              "PayCodeCombine": 0
            }
          ],
          "Day": 1,
          "PatternVersion": 2
        },
        {
          "ShiftPatternId": 4,
          "PatternId": 4,
          "Shift": {
            "TypeOfShift": "DAILY",
            "ShiftName": "General Shift",
            "ShiftShortName": "GEN",
            "Description": "Shift for general duties",
            "ColorCode": "#FF5733",
            "StartTime": "09:00:00",
            "EndTime": "18:00:00",
            "ShiftStatus": "Active"
          },
          "PayCodes": [
            {
              "PayCodeName": "Paycode1",
              "PayCodeShortname": "PC1",
              "Description": "Basic pay",
              "ColorCode": "#00FF00",
              "PayCodePriority": 1,
              "PayCodeCombine": 0
            }
          ],
          "Day": 2,
          "PatternVersion": 2
        },
        {
          "ShiftPatternId": 4,
          "PatternId": 4,
          "Shift": {
            "TypeOfShift": "DAILY",
            "ShiftName": "General Shift",
            "ShiftShortName": "GEN",
            "Description": "Shift for general duties",
            "ColorCode": "#FF5733",
            "StartTime": "09:00:00",
            "EndTime": "18:00:00",
            "ShiftStatus": "Active"
          },
          "PayCodes": [
            {
              "PayCodeName": "Paycode1",
              "PayCodeShortname": "PC1",
              "Description": "Basic pay",
              "ColorCode": "#00FF00",
              "PayCodePriority": 1,
              "PayCodeCombine": 0
            }
          ],
          "Day": 3,
          "PatternVersion": 2
        },
        {
          "ShiftPatternId": 4,
          "PatternId": 4,
          "Shift": {
            "TypeOfShift": "DAILY",
            "ShiftName": "General Shift",
            "ShiftShortName": "GEN",
            "Description": "Shift for general duties",
            "ColorCode": "#FF5733",
            "StartTime": "09:00:00",
            "EndTime": "18:00:00",
            "ShiftStatus": "Active"
          },
          "PayCodes": [
            {
              "PayCodeName": "Paycode1",
              "PayCodeShortname": "PC1",
              "Description": "Basic pay",
              "ColorCode": "#00FF00",
              "PayCodePriority": 1,
              "PayCodeCombine": 0
            }
          ],
          "Day": 4,
          "PatternVersion": 2
        },
        {
          "ShiftPatternId": 4,
          "PatternId": 4,
          "Shift": {
            "TypeOfShift": "DAILY",
            "ShiftName": "General Shift",
            "ShiftShortName": "GEN",
            "Description": "Shift for general duties",
            "ColorCode": "#FF5733",
            "StartTime": "09:00:00",
            "EndTime": "18:00:00",
            "ShiftStatus": "Active"
          },
          "PayCodes": [
            {
              "PayCodeName": "Paycode1",
              "PayCodeShortname": "PC1",
              "Description": "Basic pay",
              "ColorCode": "#00FF00",
              "PayCodePriority": 1,
              "PayCodeCombine": 0
            }
          ],
          "Day": 5,
          "PatternVersion": 2
        },{
          "ShiftPatternId": 4,
          "PatternId": 4,
          "Shift": {
            "TypeOfShift": "DAILY",
            "ShiftName": "General Shift",
            "ShiftShortName": "GEN",
            "Description": "Shift for general duties",
            "ColorCode": "#FF5733",
            "StartTime": "09:00:00",
            "EndTime": "18:00:00",
            "ShiftStatus": "Active"
          },
          "PayCodes": [
            {
              "PayCodeName": "Paycode1",
              "PayCodeShortname": "PC1",
              "Description": "Basic pay",
              "ColorCode": "#00FF00",
              "PayCodePriority": 1,
              "PayCodeCombine": 0
            }
          ],
          "Day": 6,
          "PatternVersion": 2
        },
        {
          "ShiftPatternId": 4,
          "PatternId": 4,
          "Shift": {
            "TypeOfShift": "DAILY",
            "ShiftName": "General Shift",
            "ShiftShortName": "GEN",
            "Description": "Shift for general duties",
            "ColorCode": "#FF5733",
            "StartTime": "09:00:00",
            "EndTime": "18:00:00",
            "ShiftStatus": "Active"
          },
          "PayCodes": [
            {
              "PayCodeName": "Paycode21",
              "PayCodeShortname": "PC1",
              "Description": "Basic pay",
              "ColorCode": "#00FF00",
              "PayCodePriority": 1,
              "PayCodeCombine": 0
            }
          ],
          "Day": 7,
          "PatternVersion": 2
        },
        {
          "ShiftPatternId": 4,
          "PatternId": 4,
          "Shift": {
            "TypeOfShift": "DAILY",
            "ShiftName": "General Shift",
            "ShiftShortName": "GEN",
            "Description": "Shift for general duties",
            "ColorCode": "#FF5733",
            "StartTime": "09:00:00",
            "EndTime": "18:00:00",
            "ShiftStatus": "Active"
          },
          "PayCodes": [
            {
              "PayCodeName": "Paycode1",
              "PayCodeShortname": "PC1",
              "Description": "Basic pay",
              "ColorCode": "#00FF00",
              "PayCodePriority": 1,
              "PayCodeCombine": 0
            }
          ],
          "Day": 8,
          "PatternVersion": 2
        },
        {
          "ShiftPatternId": 4,
          "PatternId": 4,
          "Shift": {
            "TypeOfShift": "DAILY",
            "ShiftName": "General Shift",
            "ShiftShortName": "GEN",
            "Description": "Shift for general duties",
            "ColorCode": "#FF5733",
            "StartTime": "09:00:00",
            "EndTime": "18:00:00",
            "ShiftStatus": "Active"
          },
          "PayCodes": [
            {
              "PayCodeName": "Paycode1",
              "PayCodeShortname": "PC1",
              "Description": "Basic pay",
              "ColorCode": "#00FF00",
              "PayCodePriority": 1,
              "PayCodeCombine": 0
            }
          ],
          "Day": 9,
          "PatternVersion": 2
        },
        {
          "ShiftPatternId": 4,
          "PatternId": 4,
          "Shift": {
            "TypeOfShift": "DAILY",
            "ShiftName": "General Shift",
            "ShiftShortName": "GEN",
            "Description": "Shift for general duties",
            "ColorCode": "#FF5733",
            "StartTime": "09:00:00",
            "EndTime": "18:00:00",
            "ShiftStatus": "Active"
          },
          "PayCodes": [
            {
              "PayCodeName": "Paycode1",
              "PayCodeShortname": "PC1",
              "Description": "Basic pay",
              "ColorCode": "#00FF00",
              "PayCodePriority": 1,
              "PayCodeCombine": 0
            }
          ],
          "Day": 10,
          "PatternVersion": 2
        },
        {
          "ShiftPatternId": 4,
          "PatternId": 4,
          "Shift": {
            "TypeOfShift": "DAILY",
            "ShiftName": "General Shift",
            "ShiftShortName": "GEN",
            "Description": "Shift for general duties",
            "ColorCode": "#FF5733",
            "StartTime": "09:00:00",
            "EndTime": "18:00:00",
            "ShiftStatus": "Active"
          },
          "PayCodes": [
            {
              "PayCodeName": "Paycode1",
              "PayCodeShortname": "PC1",
              "Description": "Basic pay",
              "ColorCode": "#00FF00",
              "PayCodePriority": 1,
              "PayCodeCombine": 0
            }
          ],
          "Day": 11,
          "PatternVersion": 2
        },
        {
          "ShiftPatternId": 4,
          "PatternId": 4,
          "Shift": {
            "TypeOfShift": "DAILY",
            "ShiftName": "General Shift",
            "ShiftShortName": "GEN",
            "Description": "Shift for general duties",
            "ColorCode": "#FF5733",
            "StartTime": "09:00:00",
            "EndTime": "18:00:00",
            "ShiftStatus": "Active"
          },
          "PayCodes": [
            {
              "PayCodeName": "Paycode1",
              "PayCodeShortname": "PC1",
              "Description": "Basic pay",
              "ColorCode": "#00FF00",
              "PayCodePriority": 1,
              "PayCodeCombine": 0
            }
          ],
          "Day": 12,
          "PatternVersion": 2
        }
      ]
    },
    {
      "PatternId": 5,
      "PatternName": "Pattern One",
      "PatternStatus": "Pending",
      "Description": "This is a test pattern",
      "Recurring": "WEEKS",
      "Days": 7,
      "TypeOfPattern": "DAILY",
      "Public": true,
      "Deleted": false,
      "Comments": "Auto approved",
      "IsApproved": null,
      "ApprovedBy": null,
      "PatternVersion": 1,
      "CreationDate": "15-07-2025",
      "ModificationDate": "15-07-2025",
      "CreatedBy": "sample-created-user1",
      "UpdatedBy": "sample-updated-user1",
      "ShiftPatternDetails": [
        {
          "ShiftPatternId": 5,
          "PatternId": 5,
          "Shift": {
            "TypeOfShift": "DAILY",
            "ShiftName": "General Shift",
            "ShiftShortName": "GEN",
            "Description": "Shift for general duties",
            "ColorCode": "#FF5733",
            "StartTime": "09:00:00",
            "EndTime": "18:00:00",
            "ShiftStatus": "Active"
          },
          "PayCodes": [
            {
              "PayCodeName": "Paycode1",
              "PayCodeShortname": "PC1",
              "Description": "Basic pay",
              "ColorCode": "#00FF00",
              "PayCodePriority": 1,
              "PayCodeCombine": 0
            }
          ],
          "Day": 1,
          "PatternVersion": 1
        }
      ]
    },
    {
      "PatternId": 6,
      "PatternName": "Pattern One",
      "PatternStatus": "Pending",
      "Description": "This is a test pattern",
      "Recurring": "WEEKS",
      "Days": 7,
      "TypeOfPattern": "DAILY",
      "Public": true,
      "Deleted": false,
      "Comments": "Auto approved",
      "IsApproved": null,
      "ApprovedBy": null,
      "PatternVersion": 1,
      "CreationDate": "18-07-2025",
      "ModificationDate": "18-07-2025",
      "CreatedBy": "sample-created-user1",
      "UpdatedBy": "sample-updated-user1",
      "ShiftPatternDetails": [
        {
          "ShiftPatternId": 6,
          "PatternId": 6,
          "Shift": {
            "TypeOfShift": "DAILY",
            "ShiftName": "General Shift",
            "ShiftShortName": "GEN",
            "Description": "Shift for general duties",
            "ColorCode": "#FF5733",
            "StartTime": "09:00:00",
            "EndTime": "18:00:00",
            "ShiftStatus": "Active"
          },
          "PayCodes": [
            {
              "PayCodeName": "Paycode1",
              "PayCodeShortname": "PC1",
              "Description": "Basic pay",
              "ColorCode": "#00FF00",
              "PayCodePriority": 1,
              "PayCodeCombine": 0
            }
          ],
          "Day": 1,
          "PatternVersion": 1
        }
      ]
    },
    {
      "PatternId": 7,
      "PatternName": "qq",
      "PatternStatus": "Active",
      "Description": "qq",
      "Recurring": "DAYS",
      "Days": 1,
      "TypeOfPattern": "DAILY",
      "Public": false,
      "Deleted": false,
      "Comments": "Auto approved",
      "IsApproved": null,
      "ApprovedBy": null,
      "PatternVersion": 1,
      "CreationDate": "22-07-2025",
      "ModificationDate": "22-07-2025",
      "CreatedBy": "sample-created-user1",
      "UpdatedBy": "sample-updated-user1",
      "ShiftPatternDetails": [
        {
          "ShiftPatternId": 7,
          "PatternId": 7,
          "Shift": {
            "TypeOfShift": "HOURLY",
            "ShiftName": "Evening Shift",
            "ShiftShortName": "TT",
            "Description": "Evening shift updated",
            "ColorCode": "#3377FF",
            "StartTime": "13:00:00.000000",
            "EndTime": "22:00:00.000000",
            "ShiftStatus": "Active"
          },
          "PayCodes": [
            {
              "PayCodeName": "Regular Paycode Z",
              "PayCodeShortname": "REG",
              "Description": "Test Description",
              "ColorCode": "#FF5734",
              "PayCodePriority": "1",
              "PayCodeCombine": "Yes"
            },
            {
              "PayCodeName": "Regular Paycode ZA",
              "PayCodeShortname": "REG",
              "Description": "Test Description",
              "ColorCode": "#FF5734",
              "PayCodePriority": "1",
              "PayCodeCombine": "Yes"
            }
          ],
          "Day": 1,
          "PatternVersion": 1
        },
      ]
    }
  ]

  searchText = '';
  showDropdown = false;
  filteredPatterns: any[] = [...this.patterns];
  selectedPattern: any = null;

  filterPatterns() {
    const search = this.searchText.toLowerCase();
    this.filteredPatterns = this.patterns.filter(p =>
      p.PatternName.toLowerCase().includes(search)
    );
    this.showDropdown = true;
  }

  onInputFocus() {
    this.filteredPatterns = [...this.patterns];
    this.showDropdown = true;
  }

  onInputBlur() {
    setTimeout(() => {
      this.showDropdown = false;
    }, 200); // delay to allow click
  }

  selectPattern(pattern: any) {
    this.selectedPattern = pattern;
    console.log(this.selectedPattern)
    this.searchText = pattern.PatternName;
    this.showDropdown = false;
  }
}
