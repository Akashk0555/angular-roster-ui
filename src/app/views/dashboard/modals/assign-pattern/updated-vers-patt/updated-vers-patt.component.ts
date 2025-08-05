import { Component, ElementRef, EventEmitter, HostListener, Input, Output, ViewChild } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-updated-vers-patt',
  templateUrl: './updated-vers-patt.component.html',
  styleUrl: './updated-vers-patt.component.scss'
})
export class UpdatedVersPattComponent {
   prevUsedPattern: any;
  
    // allVersionPatterns = [
    //   {
    //     PatternId: 8,
    //     PatternName: 'Pattern t',
    //     PatternStatus: 'Draft',
    //     Description: 'This is a test pattern',
    //     Recurring: 'WEEKS',
    //     Days: 7,
    //     TypeOfPattern: 'DAILY',
    //     Public: true,
    //     Deleted: false,
    //     Comments: 'Auto approved',
    //     IsApproved: null,
    //     ApprovedBy: null,
    //     PatternVersion: 1,
    //     PatternDuplicateCount: 18,
    //     CreationDate: '2025-08-01T11:06:43.913Z',
    //     ModificationDate: '2025-08-01T11:06:43.913Z',
    //     CreatedBy: 'sample-created-user1',
    //     UpdatedBy: 'sample-updated-user1',
    //     ShiftPatternDetails: [
    //       {
    //         ShiftPatternId: 8,
    //         PatternId: 8,
    //         Shift: {
    //           TypeOfShift: 'DAILY',
    //           ShiftName: 'General Shift',
    //           ShiftShortName: 'GEN',
    //           Description: 'Shift for general duties',
    //           ColorCode: '#FF5733',
    //           StartTime: '09:00:00',
    //           EndTime: '18:00:00',
    //           ShiftStatus: 'Active',
    //         },
    //         PayCodes: [
    //           {
    //             PayCodeName: 'Paycode1',
    //             PayCodeShortName: 'PC1',
    //             Description: 'Basic pay',
    //             ColorCode: '#00FF00',
    //             PayCodePriority: 1,
    //             PayCodeCombine: 'YES',
    //           },
    //         ],
    //         Day: 1,
    //         PatternVersion: 1,
    //       },
    //     ],
    //     IsPatternType: 'LATEST',
    //   },
    //   {
    //     PatternLogVersionId: 8,
    //     PatternId: 8,
    //     PatternName: 'Pattern t',
    //     PatternStatus: 'Draft',
    //     Description: 'This is a test pattern',
    //     Recurring: 'WEEKS',
    //     Days: 7,
    //     TypeOfPattern: 'DAILY',
    //     Public: true,
    //     Deleted: false,
    //     Comments: 'Auto approved',
    //     IsApproved: null,
    //     ApprovedBy: null,
    //     PatternVersion: 1,
    //     PatternDuplicateCount: 0,
    //     CreationDate: '2025-08-01T11:06:43.913Z',
    //     ModificationDate: '2025-08-01T11:06:43.913Z',
    //     CreatedBy: 'sample-created-user1',
    //     UpdatedBy: 'sample-updated-user1',
    //     ShiftPatternLogVersionDetails: [
    //       {
    //         ShiftPatternLogVersionId: 8,
    //         PatternId: 8,
    //         PatternLogVersionId: 8,
    //         Shift: {
    //           TypeOfShift: 'DAILY',
    //           ShiftName: 'General Shift',
    //           ShiftShortName: 'GEN',
    //           Description: 'Shift for general duties',
    //           ColorCode: '#FF5733',
    //           StartTime: '09:00:00',
    //           EndTime: '18:00:00',
    //           ShiftStatus: 'Active',
    //         },
    //         PayCodes: [
    //           {
    //             PayCodeName: 'Paycode1',
    //             PayCodeShortName: 'PC1',
    //             Description: 'Basic pay',
    //             ColorCode: '#00FF00',
    //             PayCodePriority: 1,
    //             PayCodeCombine: 'YES',
    //           },
    //         ],
    //         Day: 1,
    //         PatternVersion: 1,
    //       },
    //     ],
    //     IsPatternType: 'PREVIOUS',
    //   },
    // ];
  
    // dropdownState: { [key: string]: boolean } = {};
  
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
  
    // dropdownOpenKey: string | null = null;
  
    // toggleDropdown(row: number, col: number): void {
    //   alert('Clicked');
    //   const key = `${row}_${col}`;
    //   this.dropdownOpenKey = this.dropdownOpenKey === key ? null : key;
    // }
  
    // isDropdownOpen(row: number, col: number): boolean {
    //   return this.dropdownOpenKey === `${row}_${col}`;
    // }
    // @HostListener('document:click', ['$event'])
    // handleClickOutside(event: MouseEvent) {
    //   if (!this.eRef.nativeElement.contains(event.target)) {
    //     this.dropdownOpenKey = null;
    //   }
    // }
    // constructor(
    //   public activeModal: NgbActiveModal,
    //   private eRef: ElementRef,
    //   private modalService: NgbModal
    // ) {}
  
    // ngOnInit(): void {
    //   //taking newly created Pattern
    //   this.prevUsedPattern=this.allVersionPatterns[0]
    // }
  
    // selectPattern(pattern: any) {
    //   // Pass data back to parent modal
    //   this.activeModal.close(pattern);
    // }
  
    // // Optionally handle cancel
    // cancel() {
    //   this.activeModal.dismiss();
    // }
  
    // @Output() patternSelected = new EventEmitter<any>();
  
    // useThisPattern(pattern: any) {
    //   this.patternSelected.emit(pattern);
    // }
  
    // openUpdatedVersion() {
    //   const modalRef = this.modalService.open(UpdatedVersPattComponent, {
    //     size: 'lg',
    //     backdrop: 'static',
    //     centered: true,
    //   });
    // }




     @Input() allVersionPatterns: any[] = [];

  days: number[] = [1, 2, 3, 4, 5, 6, 7];

  @ViewChild('scrollTop') scrollTop!: ElementRef;
  @ViewChild('scrollBottom') scrollBottom!: ElementRef;

  isSyncingTop = false;
  isSyncingBottom = false;

  onScroll(direction: 'top' | 'bottom') {
    if (direction === 'top' && !this.isSyncingTop) {
      this.isSyncingBottom = true;
      this.scrollBottom.nativeElement.scrollTop = this.scrollTop.nativeElement.scrollTop;
    } else if (direction === 'bottom' && !this.isSyncingBottom) {
      this.isSyncingTop = true;
      this.scrollTop.nativeElement.scrollTop = this.scrollBottom.nativeElement.scrollTop;
    }

    setTimeout(() => {
      this.isSyncingTop = false;
      this.isSyncingBottom = false;
    }, 100);
  }

  getShiftDetail(pattern: any, day: number) {
    return pattern?.ShiftPatternDetails?.find((s: any) => s.Day === day);
  }
}
