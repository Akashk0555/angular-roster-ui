import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-prev-used-pattern',
  templateUrl: './prev-used-pattern.component.html',
  styleUrl: './prev-used-pattern.component.scss'
})
export class PrevUsedPatternComponent {
  @Input() name:string='';
  constructor(public activeModal: NgbActiveModal) {}

  closeModal(): void {
    this.activeModal.close(); // Closes the modal programmatically
  }
  submit(){
    this.activeModal.close(this.name);
  }
}