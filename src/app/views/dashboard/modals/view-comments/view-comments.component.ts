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
  selectedComment:any;
  payload = {
      RosterId: 1,
      EmployeeId: 1,
      Comments: [
        {
          Comment: 'Akash',
          CommentType: 'type 1',
          Internal: true,
        },
      ],
      createdDate: '2025-06-17',
      EndDate: '2025-06-17',
    }

@Output() commentSelected = new EventEmitter<any>();

  useThisComment(comment: any) {
    this.commentSelected.emit(comment);
  }
  constructor(private modalService: NgbModal) {}

  openModal(comment:any) {
    this.commentSelected.emit(comment);
    console.log(this.commentSelected)
    const modalRef = this.modalService.open(AddCommentsComponent, {
      windowClass: 'trans-back',
      backdrop: 'static',
    });
    
  }
}
