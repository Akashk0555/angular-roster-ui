import { Component, EventEmitter, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddCommentsComponent } from '../add-comments/add-comments.component';
import { ModalService } from '../../../../service/modal.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-view-comments',
  templateUrl: './view-comments.component.html',
  styleUrl: './view-comments.component.scss',
})
export class ViewCommentsComponent {
  selectedComment: any;
  payload = {
    RosterId: 1,
    EmployeeId: 1,
    Comments: [
      {
        Comment: 'Akash',
        CommentType: 'type 1',
        Internal: true,
      },
      {
        Comment: 'Akash1',
        CommentType: 'type 1',
        Internal: true,
      },
      {
        Comment: 'Akash2',
        CommentType: 'type 2',
        Internal: false,
      },
    ],
    createdDate: '2025-06-17',
    EndDate: '2025-06-17',
  };

  constructor(private modalService: NgbModal) {}

  openModal(comment: any) {
    const modalRef = this.modalService.open(AddCommentsComponent, {
      windowClass: 'trans-back',
      backdrop: 'static',
    });
    modalRef.componentInstance.commentfromlist = comment;
  }
}
