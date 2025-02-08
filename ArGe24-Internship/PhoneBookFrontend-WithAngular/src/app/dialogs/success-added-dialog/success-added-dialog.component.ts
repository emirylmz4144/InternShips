import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-success-update-dialog',
  templateUrl: './success-added-dialog.component.html',
  styleUrls: ['./success-added-dialog.component.scss']
})
export class SuccessAddedDialogComponent {
  constructor(public dialogRef: MatDialogRef<SuccessAddedDialogComponent>) {}

  onClose(): void {
    this.dialogRef.close();
  }
}
