import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ModalService } from '../../../../service/modal.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
declare var bootstrap: any;

@Component({
  selector: 'app-add-comments',
  templateUrl: './add-comments.component.html',
  styleUrl: './add-comments.component.scss',
})
export class AddCommentsComponent implements OnInit{
  descriptionControl = new FormControl('');
  maxChars = 1000;
  remainingChars = this.maxChars;
  

  constructor(private modalService: ModalService,
    private activeModal:NgbActiveModal
  ) {
    this.descriptionControl.valueChanges.subscribe((value) => {
      const length = value?.length || 0;
      this.remainingChars = this.maxChars - length;
    });
  }
 

  ngOnInit() {
   

  }
cancel() {
  this.activeModal.dismiss();
}
}
