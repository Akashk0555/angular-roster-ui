import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-prev-used-pattern',
  templateUrl: './prev-used-pattern.component.html',
  styleUrl: './prev-used-pattern.component.scss'
})
export class PrevUsedPatternComponent {
  
  constructor(public activeModal: NgbActiveModal) {}

  selectPattern(pattern: any) {
  // Pass data back to parent modal
  this.activeModal.close(pattern);
}

// Optionally handle cancel
cancel() {
  this.activeModal.dismiss();
}
}