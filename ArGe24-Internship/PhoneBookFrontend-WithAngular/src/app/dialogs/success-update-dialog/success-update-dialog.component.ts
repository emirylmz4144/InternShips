import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-success-update-dialog',
  templateUrl: './success-update-dialog.component.html',
})
export class SuccessUpdateDialogComponent {
  constructor(public dialogRef: MatDialogRef<SuccessUpdateDialogComponent>) {}

  onOkClick(): void {
    this.dialogRef.close();
  }
}
