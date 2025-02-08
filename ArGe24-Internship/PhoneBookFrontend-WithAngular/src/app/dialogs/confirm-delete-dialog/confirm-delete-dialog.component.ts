import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { ContactsService } from 'src/app/services/contacts.service';
import { Contact } from 'src/app/interfaces/contact';
import { SuccessDeleteDialogComponent } from '../success-delete-dialog/success-delete-dialog.component';

@Component({
  selector: 'app-confirm-delete-dialog',
  templateUrl: './confirm-delete-dialog.component.html',
})
export class ConfirmDeleteDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<ConfirmDeleteDialogComponent>,
    private dialog: MatDialog,
    private contactsService: ContactsService,
    @Inject(MAT_DIALOG_DATA) public data: Contact
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  onYesClick(): void {
    this.dialogRef.close();
    this.dialog.open(SuccessDeleteDialogComponent, {
      width: '300px',
    });
    this.contactsService.deleteContact(this.data.id).subscribe()
  }
}
