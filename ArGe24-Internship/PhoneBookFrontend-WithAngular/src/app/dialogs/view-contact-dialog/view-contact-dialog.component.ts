import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Contact } from '../../interfaces/contact';

@Component({
  selector: 'app-view-contact-dialog',
  templateUrl: './view-contact-dialog.component.html',
  styleUrls: ['./view-contact-dialog.component.scss']
})
export class ViewContactDialogComponent {
  columnDefs = [
    { field: 'FirstName', headerName: 'First Name' },
    { field: 'LastName', headerName: 'Last Name' },
    { field: 'PhoneNumber', headerName: 'Phone Number' },
    { field: 'Address', headerName: 'Address' }
  ];

  rowData: Contact[] = [this.data];

  constructor(
    public dialogRef: MatDialogRef<ViewContactDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Contact
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
