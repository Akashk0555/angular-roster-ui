import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  OnInit,
  Output,
  Type
} from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-updated-vers-patt',
  templateUrl: './updated-vers-patt.component.html',
  styleUrl: './updated-vers-patt.component.scss',
})
export class UpdatedVersPattComponent implements OnInit {
  prevUsedPattern: any;
  updatedPatternVersion:any;
  scrollDiv1:any;
  scrollDiv2:any;

  allVersionPatterns = [
    {
      PatternId: 8,
      PatternName: 'Pattern t',
      PatternStatus: 'Draft',
      Description: 'This is a test pattern',
      Recurring: 'WEEKS',
      Days: 7,
      TypeOfPattern: 'DAILY',
      Public: true,
      Deleted: false,
      Comments: 'Auto approved',
      IsApproved: null,
      ApprovedBy: null,
      PatternVersion: 1,
      PatternDuplicateCount: 18,
      CreationDate: '2025-08-01T11:06:43.913Z',
      ModificationDate: '2025-08-01T11:06:43.913Z',
      CreatedBy: 'sample-created-user1',
      UpdatedBy: 'sample-updated-user1',
      ShiftPatternDetails: [
        {
          ShiftPatternId: 8,
          PatternId: 8,
          Shift: {
            TypeOfShift: 'DAILY',
            ShiftName: 'General Shift',
            ShiftShortName: 'GEN',
            Description: 'Shift for general duties',
            ColorCode: '#278a9cff',
            StartTime: '09:00:00',
            EndTime: '18:00:00',
            ShiftStatus: 'Active',
          },
          PayCodes: [
            {
              PayCodeName: 'Paycode1',
              PayCodeShortName: 'PC1',
              Description: 'Basic pay',
              ColorCode: '#00FF00',
              PayCodePriority: 1,
              PayCodeCombine: 'YES',
            },
          ],
          Day: 1,
          PatternVersion: 1,
        },
        {
          ShiftPatternId: 8,
          PatternId: 8,
          Shift: {
            TypeOfShift: 'DAILY',
            ShiftName: 'General Shift',
            ShiftShortName: 'GEN',
            Description: 'Shift for general duties',
            ColorCode: '#FF5733',
            StartTime: '09:00:00',
            EndTime: '18:00:00',
            ShiftStatus: 'Active',
          },
          PayCodes: [
            {
              PayCodeName: 'Paycode1',
              PayCodeShortName: 'PC1',
              Description: 'Basic pay',
              ColorCode: '#00FF00',
              PayCodePriority: 1,
              PayCodeCombine: 'YES',
            },
          ],
          Day: 2,
          PatternVersion: 1,
        },
        {
          ShiftPatternId: 8,
          PatternId: 8,
          Shift: {
            TypeOfShift: 'DAILY',
            ShiftName: 'General Shift',
            ShiftShortName: 'GEN',
            Description: 'Shift for general duties',
            ColorCode: '#2d22c4ff',
            StartTime: '09:00:00',
            EndTime: '18:00:00',
            ShiftStatus: 'Active',
          },
          PayCodes: [
            {
              PayCodeName: 'Paycode1',
              PayCodeShortName: 'PC1',
              Description: 'Basic pay',
              ColorCode: '#00FF00',
              PayCodePriority: 1,
              PayCodeCombine: 'YES',
            },
          ],
          Day: 3,
          PatternVersion: 1,
        },
        {
          ShiftPatternId: 8,
          PatternId: 8,
          Shift: {
            TypeOfShift: 'DAILY',
            ShiftName: 'General Shift',
            ShiftShortName: 'GEN',
            Description: 'Shift for general duties',
            ColorCode: '#FF5733',
            StartTime: '09:00:00',
            EndTime: '18:00:00',
            ShiftStatus: 'Active',
          },
          PayCodes: [
            {
              PayCodeName: 'Paycode1',
              PayCodeShortName: 'PC1',
              Description: 'Basic pay',
              ColorCode: '#00FF00',
              PayCodePriority: 1,
              PayCodeCombine: 'YES',
            },
          ],
          Day: 4,
          PatternVersion: 1,
        },
        {
          ShiftPatternId: 8,
          PatternId: 8,
          Shift: {
            TypeOfShift: 'DAILY',
            ShiftName: 'General Shift',
            ShiftShortName: 'GEN',
            Description: 'Shift for general duties',
            ColorCode: '#FF5733',
            StartTime: '09:00:00',
            EndTime: '18:00:00',
            ShiftStatus: 'Active',
          },
          PayCodes: [
            {
              PayCodeName: 'Paycode1',
              PayCodeShortName: 'PC1',
              Description: 'Basic pay',
              ColorCode: '#00FF00',
              PayCodePriority: 1,
              PayCodeCombine: 'YES',
            },
          ],
          Day: 5,
          PatternVersion: 1,
        },
        {
          ShiftPatternId: 8,
          PatternId: 8,
          Shift: {
            TypeOfShift: 'DAILY',
            ShiftName: 'General Shift',
            ShiftShortName: 'GEN',
            Description: 'Shift for general duties',
            ColorCode: '#FF5733',
            StartTime: '09:00:00',
            EndTime: '18:00:00',
            ShiftStatus: 'Active',
          },
          PayCodes: [
            {
              PayCodeName: 'Paycode1',
              PayCodeShortName: 'PC1',
              Description: 'Basic pay',
              ColorCode: '#00FF00',
              PayCodePriority: 1,
              PayCodeCombine: 'YES',
            },
          ],
          Day: 6,
          PatternVersion: 1,
        },
        {
          ShiftPatternId: 8,
          PatternId: 8,
          Shift: {
            TypeOfShift: 'DAILY',
            ShiftName: 'General Shift',
            ShiftShortName: 'GEN',
            Description: 'Shift for general duties',
            ColorCode: '#FF5733',
            StartTime: '09:00:00',
            EndTime: '18:00:00',
            ShiftStatus: 'Active',
          },
          PayCodes: [
            {
              PayCodeName: 'Paycode1',
              PayCodeShortName: 'PC1',
              Description: 'Basic pay',
              ColorCode: '#00FF00',
              PayCodePriority: 1,
              PayCodeCombine: 'YES',
            },
          ],
          Day: 7,
          PatternVersion: 1,
        },
        {
          ShiftPatternId: 8,
          PatternId: 8,
          Shift: {
            TypeOfShift: 'DAILY',
            ShiftName: 'General Shift',
            ShiftShortName: 'GEN',
            Description: 'Shift for general duties',
            ColorCode: '#FF5733',
            StartTime: '09:00:00',
            EndTime: '18:00:00',
            ShiftStatus: 'Active',
          },
          PayCodes: [
            {
              PayCodeName: 'Paycode1',
              PayCodeShortName: 'PC1',
              Description: 'Basic pay',
              ColorCode: '#00FF00',
              PayCodePriority: 1,
              PayCodeCombine: 'YES',
            },
          ],
          Day: 8,
          PatternVersion: 1,
        },
        {
          ShiftPatternId: 8,
          PatternId: 8,
          Shift: {
            TypeOfShift: 'DAILY',
            ShiftName: 'General Shift',
            ShiftShortName: 'GEN',
            Description: 'Shift for general duties',
            ColorCode: '#FF5733',
            StartTime: '09:00:00',
            EndTime: '18:00:00',
            ShiftStatus: 'Active',
          },
          PayCodes: [
            {
              PayCodeName: 'Paycode1',
              PayCodeShortName: 'PC1',
              Description: 'Basic pay',
              ColorCode: '#00FF00',
              PayCodePriority: 1,
              PayCodeCombine: 'YES',
            },
          ],
          Day: 9,
          PatternVersion: 1,
        },
        {
          ShiftPatternId: 8,
          PatternId: 8,
          Shift: {
            TypeOfShift: 'DAILY',
            ShiftName: 'General Shift',
            ShiftShortName: 'GEN',
            Description: 'Shift for general duties',
            ColorCode: '#FF5733',
            StartTime: '09:00:00',
            EndTime: '18:00:00',
            ShiftStatus: 'Active',
          },
          PayCodes: [
            {
              PayCodeName: 'Paycode1',
              PayCodeShortName: 'PC1',
              Description: 'Basic pay',
              ColorCode: '#00FF00',
              PayCodePriority: 1,
              PayCodeCombine: 'YES',
            },
          ],
          Day: 10,
          PatternVersion: 1,
        },
        {
          ShiftPatternId: 8,
          PatternId: 8,
          Shift: {
            TypeOfShift: 'DAILY',
            ShiftName: 'General Shift',
            ShiftShortName: 'GEN',
            Description: 'Shift for general duties',
            ColorCode: '#FF5733',
            StartTime: '09:00:00',
            EndTime: '18:00:00',
            ShiftStatus: 'Active',
          },
          PayCodes: [
            {
              PayCodeName: 'Paycode1',
              PayCodeShortName: 'PC1',
              Description: 'Basic pay',
              ColorCode: '#00FF00',
              PayCodePriority: 1,
              PayCodeCombine: 'YES',
            },
          ],
          Day: 11,
          PatternVersion: 1,
        },
        {
          ShiftPatternId: 8,
          PatternId: 8,
          Shift: {
            TypeOfShift: 'DAILY',
            ShiftName: 'General Shift',
            ShiftShortName: 'GEN',
            Description: 'Shift for general duties',
            ColorCode: '#FF5733',
            StartTime: '09:00:00',
            EndTime: '18:00:00',
            ShiftStatus: 'Active',
          },
          PayCodes: [
            {
              PayCodeName: 'Paycode1',
              PayCodeShortName: 'PC1',
              Description: 'Basic pay',
              ColorCode: '#00FF00',
              PayCodePriority: 1,
              PayCodeCombine: 'YES',
            },
          ],
          Day: 12,
          PatternVersion: 1,
        },
      ],
      IsPatternType: 'LATEST',
    },
    {
      PatternLogVersionId: 8,
      PatternId: 8,
      PatternName: 'Pattern t2',
      PatternStatus: 'Draft',
      Description: 'This is a test pattern',
      Recurring: 'WEEKS',
      Days: 7,
      TypeOfPattern: 'DAILY',
      Public: true,
      Deleted: false,
      Comments: 'Auto approved',
      IsApproved: null,
      ApprovedBy: null,
      PatternVersion: 1,
      PatternDuplicateCount: 0,
      CreationDate: '2025-08-01T11:06:43.913Z',
      ModificationDate: '2025-08-01T11:06:43.913Z',
      CreatedBy: 'sample-created-user1',
      UpdatedBy: 'sample-updated-user1',
      ShiftPatternLogVersionDetails: [
        {
          ShiftPatternLogVersionId: 8,
          PatternId: 8,
          PatternLogVersionId: 8,
          Shift: {
            TypeOfShift: 'DAILY',
            ShiftName: 'General Shift',
            ShiftShortName: 'GEN',
            Description: 'Shift for general duties',
            ColorCode: '#FF5733',
            StartTime: '09:00:00',
            EndTime: '18:00:00',
            ShiftStatus: 'Active',
          },
          PayCodes: [
            {
              PayCodeName: 'Paycode1',
              PayCodeShortName: 'PC1',
              Description: 'Basic pay',
              ColorCode: '#00FF00',
              PayCodePriority: 1,
              PayCodeCombine: 'YES',
            },
          ],
          Day: 1,
          PatternVersion: 1,
        },
      ],
      IsPatternType: 'PREVIOUS',
    },
  ];
  private isSyncing = false;

  onScroll(source: HTMLElement, target: HTMLElement, sourceId: string) {
    if (this.isSyncing) return;

    this.isSyncing = true;
    target.scrollTop = source.scrollTop;
    this.isSyncing = false;
  }




  // getShiftRows(): any[][] {
  //   const days = this.prevUsedPattern.ShiftPatternDetails;
  //   const rows: any[][] = [];
  //   const daysPerRow = 7;

  //   for (let i = 0; i < days.length; i += daysPerRow) {
  //     const week = Array(7).fill(null);
  //     for (let j = 0; j < daysPerRow && i + j < days.length; j++) {
  //       const dayIndex = days[i + j].Day - 1; // Adjust for 0-based index
  //       week[dayIndex % 7] = days[i + j];
  //     }
  //     rows.push(week);
  //   }

  //   return rows;
  // }

getShiftRows(pattern: any): any[][] {
  const details =
    pattern.IsPatternType === 'LATEST'
      ? pattern.ShiftPatternDetails
      : pattern.ShiftPatternLogVersionDetails;

  const rows: any[][] = [];
  const daysPerRow = 7;

  for (let i = 0; i < details.length; i += daysPerRow) {
    const week = Array(7).fill(null);
    for (let j = 0; j < daysPerRow && i + j < details.length; j++) {
      const dayIndex = details[i + j].Day - 1; // Adjust for 0-based index
      week[dayIndex % 7] = details[i + j];
    }
    rows.push(week);
  }

  return rows;
}






  dropdownOpenKey: string | null = null;

  toggleDropdown(row: number, col: number): void {
    alert('Clicked');
    const key = `${row}_${col}`;
    this.dropdownOpenKey = this.dropdownOpenKey === key ? null : key;
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
  constructor(
    public activeModal: NgbActiveModal,
    private eRef: ElementRef,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    //taking newly created Pattern
    this.prevUsedPattern = this.allVersionPatterns[0];
    this.updatedPatternVersion=this.allVersionPatterns[1]
  }

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

  onRadioChange(selectedPattern: any) {
  console.log('Selected Pattern:', selectedPattern);
}


}
