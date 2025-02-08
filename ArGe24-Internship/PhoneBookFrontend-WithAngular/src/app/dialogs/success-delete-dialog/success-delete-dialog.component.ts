import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-success-delete-dialog',
  templateUrl: './success-delete-dialog.component.html',
})
export class SuccessDeleteDialogComponent {
  constructor(public dialogRef: MatDialogRef<SuccessDeleteDialogComponent>) {}

  onOkClick(): void {
    this.dialogRef.close();
  }
}
