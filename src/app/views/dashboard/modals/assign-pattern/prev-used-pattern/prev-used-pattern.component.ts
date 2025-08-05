import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UpdatedVersPattComponent } from '../updated-vers-patt/updated-vers-patt.component';

@Component({
  selector: 'app-prev-used-pattern',
  templateUrl: './prev-used-pattern.component.html',
  styleUrl: './prev-used-pattern.component.scss',
})
export class PrevUsedPatternComponent implements OnInit {
  prevUsedPattern: any=null;
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
      PatternVersion: 2,
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

  dropdownState: { [key: string]: boolean } = {};

  

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
   // taking newly created Pattern
    if (
      this.allVersionPatterns[0].PatternVersion ==
      this.allVersionPatterns[1].PatternVersion
    ) {
     
      this.prevUsedPattern = this.allVersionPatterns[0];
       console.log(this.prevUsedPattern);
    }
    else{
      this.prevUsedPattern=this.allVersionPatterns.find(pattern=>pattern.IsPatternType==='PREVIOUS')
    }

  }


  getShiftRows(): any[][] {
  if (!this.prevUsedPattern) return [];

  const shiftDetails =
    this.prevUsedPattern.ShiftPatternDetails ||
    this.prevUsedPattern.ShiftPatternLogVersionDetails;

  if (!shiftDetails || shiftDetails.length === 0) return [];

  const rows: any[][] = [];
  const daysPerRow = 7;

  for (let i = 0; i < shiftDetails.length; i += daysPerRow) {
    const week = Array(7).fill(null);
    for (let j = 0; j < daysPerRow && i + j < shiftDetails.length; j++) {
      const dayIndex = shiftDetails[i + j].Day - 1;
      week[dayIndex % 7] = shiftDetails[i + j];
    }
    rows.push(week);
  }

  return rows;
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

  openUpdatedVersion() {
    const modalRef = this.modalService.open(UpdatedVersPattComponent, {
      size: 'lg',
      backdrop: 'static',
      centered: true,
    });
  }
}
