import { Component, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-prev-used-pattern',
  templateUrl: './prev-used-pattern.component.html',
  styleUrl: './prev-used-pattern.component.scss'
})
export class PrevUsedPatternComponent {

  prevUsedPattern= {
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
    }
  dropdownState: { [key: string]: boolean } = {};

  getShiftRows(): any[][] {
    const days = this.prevUsedPattern.ShiftPatternDetails;
    const rows: any[][] = [];
    const daysPerRow = 7;

    for (let i = 0; i < days.length; i += daysPerRow) {
      const week = Array(7).fill(null);
      for (let j = 0; j < daysPerRow && i + j < days.length; j++) {
        const dayIndex = days[i + j].Day - 1; // Adjust for 0-based index
        week[dayIndex % 7] = days[i + j];
      }
      rows.push(week);
    }

    return rows;
  }

  dropdownOpenKey: string | null = null;

toggleDropdown(row: number, col: number): void {
  const key = `${row}_${col}`;
  this.dropdownOpenKey = (this.dropdownOpenKey === key) ? null : key;
}

isDropdownOpen(row: number, col: number): boolean {
  return this.dropdownOpenKey === `${row}_${col}`;
}
@HostListener('document:click', ['$event'])
handleClickOutside(event: MouseEvent) {
  if (!this.eRef.nativeElement.contains(event.target)) {
    this.dropdownOpenKey = null;
  }
}
  constructor(public activeModal: NgbActiveModal,
    private eRef:ElementRef

  ) {}

  selectPattern(pattern: any) {
  // Pass data back to parent modal
  this.activeModal.close(pattern);
}

// Optionally handle cancel
cancel() {
  this.activeModal.dismiss();
}


@Output() patternSelected = new EventEmitter<any>();

  useThisPattern(pattern: any) {
    this.patternSelected.emit(pattern);
  }
}