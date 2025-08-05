import {
  Component,
  HostListener,
  Inject,
  OnInit,
  PLATFORM_ID,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PrevUsedPatternComponent } from './prev-used-pattern/prev-used-pattern.component';

@Component({
  selector: 'app-assign-pattern',
  templateUrl: './assign-pattern.component.html',
  styleUrl: './assign-pattern.component.scss',
})
export class AssignPatternComponent implements OnInit {
  assignPatternForm!: FormGroup;
  selectedPattern: any = null;
  patternFormPrevUsed: any = null;
  patterns = [
    {
      PatternId: 4,
      PatternName: 'Pattern One',
      PatternStatus: 'Pending',
      Description: 'This is a test pattern',
      Recurring: 'WEEKS',
      Days: 12,
      TypeOfPattern: 'DAILY',
      Public: true,
      Deleted: false,
      Comments: 'Auto approved',
      IsApproved: '0',
      ApprovedBy: 'admin_user',
      PatternVersion: 2,
      CreationDate: '10-07-2025',
      ModificationDate: '10-07-2025',
      CreatedBy: 'sample-created-user1',
      UpdatedBy: 'sample-updated-user-2',
      ShiftPatternDetails: [
        {
          ShiftPatternId: 4,
          PatternId: 4,
          Shift: {
            TypeOfShift: 'DAILY',
            ShiftName: 'General Shift',
            ShiftShortName: 'GEN',
            Description: 'Shift for general duties',
            ColorCode: '#3920b5ff',
            StartTime: '09:00:00',
            EndTime: '18:00:00',
            ShiftStatus: 'Active',
          },
          PayCodes: [
            {
              PayCodeName: 'Paycode1',
              PayCodeShortname: 'PC1',
              Description: 'Basic pay',
              ColorCode: '#00FF00',
              PayCodePriority: 1,
              PayCodeCombine: 0,
            },
          ],
          Day: 1,
          PatternVersion: 2,
        },
        {
          ShiftPatternId: 4,
          PatternId: 4,
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
              PayCodeShortname: 'PC1',
              Description: 'Basic pay',
              ColorCode: '#00FF00',
              PayCodePriority: 1,
              PayCodeCombine: 0,
            },
          ],
          Day: 2,
          PatternVersion: 2,
        },
        {
          ShiftPatternId: 4,
          PatternId: 4,
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
              PayCodeShortname: 'PC1',
              Description: 'Basic pay',
              ColorCode: '#00FF00',
              PayCodePriority: 1,
              PayCodeCombine: 0,
            },
          ],
          Day: 3,
          PatternVersion: 2,
        },
        {
          ShiftPatternId: 4,
          PatternId: 4,
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
              PayCodeShortname: 'PC1',
              Description: 'Basic pay',
              ColorCode: '#00FF00',
              PayCodePriority: 1,
              PayCodeCombine: 0,
            },
          ],
          Day: 4,
          PatternVersion: 2,
        },
        {
          ShiftPatternId: 4,
          PatternId: 4,
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
              PayCodeShortname: 'PC1',
              Description: 'Basic pay',
              ColorCode: '#00FF00',
              PayCodePriority: 1,
              PayCodeCombine: 0,
            },
          ],
          Day: 5,
          PatternVersion: 2,
        },
        {
          ShiftPatternId: 4,
          PatternId: 4,
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
              PayCodeShortname: 'PC1',
              Description: 'Basic pay',
              ColorCode: '#00FF00',
              PayCodePriority: 1,
              PayCodeCombine: 0,
            },
          ],
          Day: 6,
          PatternVersion: 2,
        },
        {
          ShiftPatternId: 4,
          PatternId: 4,
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
              PayCodeName: 'Paycode21',
              PayCodeShortname: 'PC1',
              Description: 'Basic pay',
              ColorCode: '#00FF00',
              PayCodePriority: 1,
              PayCodeCombine: 0,
            },
          ],
          Day: 7,
          PatternVersion: 2,
        },
        {
          ShiftPatternId: 4,
          PatternId: 4,
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
              PayCodeShortname: 'PC1',
              Description: 'Basic pay',
              ColorCode: '#00FF00',
              PayCodePriority: 1,
              PayCodeCombine: 0,
            },
          ],
          Day: 8,
          PatternVersion: 2,
        },
        {
          ShiftPatternId: 4,
          PatternId: 4,
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
              PayCodeShortname: 'PC1',
              Description: 'Basic pay',
              ColorCode: '#00FF00',
              PayCodePriority: 1,
              PayCodeCombine: 0,
            },
          ],
          Day: 9,
          PatternVersion: 2,
        },
        {
          ShiftPatternId: 4,
          PatternId: 4,
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
              PayCodeShortname: 'PC1',
              Description: 'Basic pay',
              ColorCode: '#00FF00',
              PayCodePriority: 1,
              PayCodeCombine: 0,
            },
          ],
          Day: 10,
          PatternVersion: 2,
        },
        {
          ShiftPatternId: 4,
          PatternId: 4,
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
              PayCodeShortname: 'PC1',
              Description: 'Basic pay',
              ColorCode: '#00FF00',
              PayCodePriority: 1,
              PayCodeCombine: 0,
            },
          ],
          Day: 11,
          PatternVersion: 2,
        },
        {
          ShiftPatternId: 4,
          PatternId: 4,
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
              PayCodeShortname: 'PC1',
              Description: 'Basic pay',
              ColorCode: '#00FF00',
              PayCodePriority: 1,
              PayCodeCombine: 0,
            },
          ],
          Day: 12,
          PatternVersion: 2,
        },
      ],
    },
    {
      PatternId: 5,
      PatternName: 'Pattern One',
      PatternStatus: 'Pending',
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
      CreationDate: '15-07-2025',
      ModificationDate: '15-07-2025',
      CreatedBy: 'sample-created-user1',
      UpdatedBy: 'sample-updated-user1',
      ShiftPatternDetails: [
        {
          ShiftPatternId: 5,
          PatternId: 5,

          PayCodes: [
            {
              PayCodeName: 'Paycode1',
              PayCodeShortname: 'PC1',
              Description: 'Basic pay',
              ColorCode: '#00FF00',
              PayCodePriority: 1,
              PayCodeCombine: 0,
            },
          ],
          Day: 1,
          PatternVersion: 1,
        },
      ],
    },
    {
      PatternId: 6,
      PatternName: 'Pattern One',
      PatternStatus: 'Pending',
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
      CreationDate: '18-07-2025',
      ModificationDate: '18-07-2025',
      CreatedBy: 'sample-created-user1',
      UpdatedBy: 'sample-updated-user1',
      ShiftPatternDetails: [
        {
          ShiftPatternId: 6,
          PatternId: 6,
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
              PayCodeShortname: 'PC1',
              Description: 'Basic pay',
              ColorCode: '#00FF00',
              PayCodePriority: 1,
              PayCodeCombine: 0,
            },
          ],
          Day: 1,
          PatternVersion: 1,
        },
      ],
    },
    {
      PatternId: 7,
      PatternName: 'qq',
      PatternStatus: 'Active',
      Description: 'qq',
      Recurring: 'DAYS',
      Days: 1,
      TypeOfPattern: 'DAILY',
      Public: false,
      Deleted: false,
      Comments: 'Auto approved',
      IsApproved: null,
      ApprovedBy: null,
      PatternVersion: 1,
      CreationDate: '22-07-2025',
      ModificationDate: '22-07-2025',
      CreatedBy: 'sample-created-user1',
      UpdatedBy: 'sample-updated-user1',
      ShiftPatternDetails: [
        {
          ShiftPatternId: 7,
          PatternId: 7,
          Shift: {
            TypeOfShift: 'HOURLY',
            ShiftName: 'Evening Shift',
            ShiftShortName: 'TT',
            Description: 'Evening shift updated',
            ColorCode: '#3377FF',
            StartTime: '13:00:00.000000',
            EndTime: '22:00:00.000000',
            ShiftStatus: 'Active',
          },
          PayCodes: [
            {
              PayCodeName: 'Regular Paycode Z',
              PayCodeShortname: 'REG',
              Description: 'Test Description',
              ColorCode: '#FF5734',
              PayCodePriority: '1',
              PayCodeCombine: 'Yes',
            },
            {
              PayCodeName: 'Regular Paycode ZA',
              PayCodeShortname: 'REG',
              Description: 'Test Description',
              ColorCode: '#FF5734',
              PayCodePriority: '1',
              PayCodeCombine: 'Yes',
            },
          ],
          Day: 1,
          PatternVersion: 1,
        },
      ],
    },
  ];

  ngOnInit(): void {
    this.assignPatternForm = this.fb.group({
      selectedPatternId: [null],
      searchtext: [],
      patternname: [null, Validators.required],
      recurring: [],
      noofdaysorweek: [],
      startdate: [],
      enddate: [],
      description: [],
      openpattern: [],
      publishto: [],
      patternschedule: [],
    });

    // this.assignPatternForm.get('patternname')?.valueChanges.subscribe(id => {
    //   this.selectedPattern=this.patterns.find(p=>p.PatternId===id);
    //   console.log(this.selectedPattern)

    //   //const selected = this.patterns.find(p => p.PatternId === id);
    //   if (this.selectedPattern) {
    //     this.assignPatternForm.patchValue({
    //       selectedPatternId:this.selectedPattern.PatternId,
    //      // shortname: selected.PayCodeShortName,
    //       description: this.selectedPattern.Description,
    //       recurring:this.selectedPattern.Recurring,
    //       noofdaysorweek:this.selectedPattern.Days,
    //       //startdate: selected.,
    //       //enddate: selected.enddate,
    //       //allowancetype: selected.PayCodeType,
    //       //starttime: selected.starttime,
    //      // endtime: selected.endtime,
    //      // paycodetype: selected.paycodetype
    //      patternschedule:this.selectedPattern.ShiftPatternDetails
    //     });

    //   }
    // });
  }
  searchText = '';
  showDropdown = false;
  filteredPatterns: any[] = [...this.patterns];
  filterPatterns() {
    const search = this.searchText.toLowerCase();
    this.filteredPatterns = this.patterns.filter((p) =>
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

    if (this.selectedPattern) {
      this.assignPatternForm.patchValue({
        patternname: this.selectedPattern.PatternName,
        patternschedule: this.selectedPattern.ShiftPatternDetails,
        recurring: this.selectedPattern.Recurring,
        noofdaysorweek: this.selectedPattern.Days,
      });
    }
    this.showDropdown = false;
  }
  constructor(
    private modalService: NgbModal,
    private fb: FormBuilder,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  // Open previously used pattern
  openNestedModal() {
    const modalRef = this.modalService.open(PrevUsedPatternComponent, {
      size: 'lg',
      backdrop: 'static',
    });

    modalRef.componentInstance.patternSelected.subscribe((pattern: any) => {
      this.patternFormPrevUsed = pattern;
      if (this.patternFormPrevUsed) {
        this.selectedPattern = pattern;
        this.assignPatternForm.patchValue({
          selectedPatternId: this.patternFormPrevUsed.PatternId,
          // shortname: selected.PayCodeShortName,
          patternname: this.patternFormPrevUsed.PatternName,
          description: this.patternFormPrevUsed.Description,
          recurring: this.patternFormPrevUsed.Recurring,
          noofdaysorweek: this.patternFormPrevUsed.Days,
          //startdate: selected.,
          //enddate: selected.enddate,
          //allowancetype: selected.PayCodeType,
          //starttime: selected.starttime,
          // endtime: selected.endtime,
          // paycodetype: selected.paycodetype
          patternschedule: this.patternFormPrevUsed.ShiftPatternDetails,
        });
      }

      modalRef.close();
    });
  }

  onSubmit(): void {
    console.log(this.selectedPattern);
    if (this.assignPatternForm.valid) {
      console.log('Form Submitted:', this.assignPatternForm.value);
      // TODO: add login logic
    } else {
      this.assignPatternForm.markAllAsTouched();
    }
  }

  get patternname() {
    return this.assignPatternForm.get('patternname');
  }
  get noofdaysorweek() {
    return this.assignPatternForm.get('noofdaysorweek');
  }
  get startdate() {
    return this.assignPatternForm.get('startdate');
  }
  get openpattern() {
    return this.assignPatternForm.get('openpattern');
  }
  get enddate() {
    return this.assignPatternForm.get('enddate');
  }
  get description() {
    return this.assignPatternForm.get('description');
  }
  get patternschedule() {
    return this.assignPatternForm.get('patternschedule');
  }

  getGroupedPatternDetails(): any[][] {
    const allDays = new Array(
      (this.selectedPattern || this.patternFormPrevUsed)?.Days || 0
    )
      .fill(0)
      .map((_, i) => i + 1);
    const grouped: number[][] = [];

    for (let i = 0; i < allDays.length; i += 7) {
      grouped.push(allDays.slice(i, i + 7));
    }

    return grouped;
  }

  popupVisibleDay: number | null = null;

  activeDay: any = null;

  showPopup(day: any, event: MouseEvent) {
    event.stopPropagation(); // Prevent it from closing immediately
    this.activeDay = this.activeDay === day ? null : day; // Toggle
  }

  closePopup() {
    this.popupVisibleDay = null;
  }

  getShiftDetailsByDay(day: number) {
    console.log(
      (
        this.selectedPattern || this.patternFormPrevUsed
      )?.ShiftPatternDetails?.find((s: any) => s.Day === day).PayCodes
    );
    return (
      this.selectedPattern || this.patternFormPrevUsed
    )?.ShiftPatternDetails?.find((s: any) => s.Day === day);
  }
  @HostListener('document:click', ['$event'])
  handleOutsideClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (
      !target.closest('.popup-trigger') &&
      !target.closest('.dropdown-menu')
    ) {
      this.activeDay = null; // Close the popup
    }
  }
}
