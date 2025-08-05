import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-assign-temp-emp',
  templateUrl: './assign-temp-emp.component.html',
  styleUrl: './assign-temp-emp.component.scss',
})
export class AssignTempEmpComponent implements AfterViewInit {
  @ViewChild('resizableTable', { static: false })
  tableRef!: ElementRef<HTMLTableElement>;
  selectedRow: any;

  selectRow(row: any): void {
    this.selectedRow = row;
    console.log('Selected Row:', row);
  }

  ngAfterViewInit(): void {
    const tableEl = this.tableRef?.nativeElement;
    if (!tableEl) {
      //console.warn('Table element not found');
      return;
    }

    const thElements = tableEl.querySelectorAll('th');
    if (!thElements || typeof thElements.forEach !== 'function') {
      //console.warn('thElements is not a NodeList:', thElements);
      return;
    }

    thElements.forEach((th) => {
      const resizer = th.querySelector('.resizer') as HTMLElement;
      if (!resizer) return;

      let startX = 0;
      let startWidth = 0;

      resizer.addEventListener('mousedown', (e: MouseEvent) => {
        startX = e.pageX;
        startWidth = th.offsetWidth;

        const onMouseMove = (moveEvent: MouseEvent) => {
          const newWidth = startWidth + (moveEvent.pageX - startX);
          th.style.width = `${newWidth}px`;
        };

        const onMouseUp = () => {
          document.removeEventListener('mousemove', onMouseMove);
          document.removeEventListener('mouseup', onMouseUp);
        };

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
      });
    });
  }

  emp = [
    {
      EmployeeID: 'EMP001',
      EmployeeName: 'John Doe',
      SLO: 'SLO123',
      Program: 'Health Outreach',
      Site: 'Chennai Clinic',
      Country: 'India',
      Position: 'Nurse',
      StaffType: 'Full-time',
      MedicalOrNonMedicalStaff: 'Medical',
    },
    {
      EmployeeID: 'EMP002',
      EmployeeName: 'Priya Sharma',
      SLO: 'SLO124',
      Program: 'Community Care',
      Site: 'Delhi Center',
      Country: 'India',
      Position: 'Program Manager',
      StaffType: 'Part-time',
      MedicalOrNonMedicalStaff: 'Non-Medical',
    },
    {
      EmployeeID: 'EMP003',
      EmployeeName: 'Ahmed Khan',
      SLO: 'SLO125',
      Program: 'Emergency Response',
      Site: 'Mumbai Hub',
      Country: 'India',
      Position: 'Paramedic',
      StaffType: 'Full-time',
      MedicalOrNonMedicalStaff: 'Medical',
    },
    {
      EmployeeID: 'EMP004',
      EmployeeName: 'Meena Iyer',
      SLO: 'SLO126',
      Program: 'Maternal Health',
      Site: 'Bangalore Unit',
      Country: 'India',
      Position: 'Health Educator',
      StaffType: 'Contract',
      MedicalOrNonMedicalStaff: 'Non-Medical',
    },
    {
      EmployeeID: 'EMP005',
      EmployeeName: 'Ravi Kumar',
      SLO: 'SLO127',
      Program: 'Nutrition Support',
      Site: 'Hyderabad Center',
      Country: 'India',
      Position: 'Dietician',
      StaffType: 'Full-time',
      MedicalOrNonMedicalStaff: 'Medical',
    },
    {
      EmployeeID: 'EMP006',
      EmployeeName: 'Sneha Reddy',
      SLO: 'SLO128',
      Program: 'Child Wellness',
      Site: 'Pune Clinic',
      Country: 'India',
      Position: 'Social Worker',
      StaffType: 'Part-time',
      MedicalOrNonMedicalStaff: 'Non-Medical',
    },
    {
      EmployeeID: 'EMP007',
      EmployeeName: 'Vikram Singh',
      SLO: 'SLO129',
      Program: 'Mobile Health Unit',
      Site: 'Jaipur Mobile',
      Country: 'India',
      Position: 'Driver',
      StaffType: 'Contract',
      MedicalOrNonMedicalStaff: 'Non-Medical',
    },
    {
      EmployeeID: 'EMP008',
      EmployeeName: 'Anjali Verma',
      SLO: 'SLO130',
      Program: 'Immunization Drive',
      Site: 'Lucknow Center',
      Country: 'India',
      Position: 'Vaccination Nurse',
      StaffType: 'Full-time',
      MedicalOrNonMedicalStaff: 'Medical',
    },
    {
      EmployeeID: 'EMP009',
      EmployeeName: 'Karan Patel',
      SLO: 'SLO131',
      Program: 'Mental Health Support',
      Site: 'Ahmedabad Clinic',
      Country: 'India',
      Position: 'Psychologist',
      StaffType: 'Full-time',
      MedicalOrNonMedicalStaff: 'Medical',
    },
    {
      EmployeeID: 'EMP010',
      EmployeeName: 'Divya Nair',
      SLO: 'SLO132',
      Program: 'Health Awareness',
      Site: 'Kochi Center',
      Country: 'India',
      Position: 'Outreach Coordinator',
      StaffType: 'Part-time',
      MedicalOrNonMedicalStaff: 'Non-Medical',
    },
  ];
}
