// modal.service.ts
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ModalService {
  private openModalBSource = new Subject<void>();
  openModalB$ = this.openModalBSource.asObservable();

  triggerModalB() {
    this.openModalBSource.next();
  }
}
