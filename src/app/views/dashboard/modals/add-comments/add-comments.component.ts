import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-comments',
  templateUrl: './add-comments.component.html',
  styleUrls: ['./add-comments.component.scss'],
})
export class AddCommentsComponent implements OnInit {
  rosterForm!: FormGroup;
  maxChars = 1000;
  remainingChars = this.maxChars;

  constructor(private fb: FormBuilder, private activeModal: NgbActiveModal) {}

  ngOnInit() {
    this.rosterForm = this.fb.group({
      comment: [''],
      commentType: [''],
      internal: [false],
    });

    this.rosterForm.get('comment')?.valueChanges.subscribe((value) => {
      const length = value?.length || 0;
      this.remainingChars = this.maxChars - length;
    });

    
  }

  cancel() {
    this.activeModal.dismiss();
  }

  submit() {
    const formValue = this.rosterForm.value;
    const payload = {
      RosterId: 1,
      EmployeeId: 1,
      Comments: [
        {
          Comment: formValue.comment,
          CommentType: formValue.commentType,
          Internal: formValue.internal,
        },
      ],
      StartDate: '2025-06-17',
      EndDate: '2025-06-17',
    };

    console.log('Form Payload:', payload);
    this.activeModal.close(payload);
  }
}