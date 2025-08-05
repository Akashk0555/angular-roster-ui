import { Component } from '@angular/core';
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
  constructor(private modalService: NgbModal) {}

  openModal() {
    const modalRef = this.modalService.open(AddCommentsComponent, {
      windowClass: 'trans-back',
      backdrop: 'static',
    });
  }
}
