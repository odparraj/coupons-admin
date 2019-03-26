import { Component, Input } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
@Component({
  selector: 'user-modal',
  templateUrl: './user-modal.component.html',
  styleUrls: ['./user-modal.component.scss'],
})
export class UserModalComponent{
  @Input() title: string;

  constructor(protected ref: NbDialogRef<UserModalComponent>) {}

  dismiss() {
    this.ref.close();
  }
}
