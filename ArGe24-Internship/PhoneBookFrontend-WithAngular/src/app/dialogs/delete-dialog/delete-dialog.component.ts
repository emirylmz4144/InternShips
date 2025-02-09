import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material/dialog';
import { Contact } from 'src/app/interfaces/contact';
import { ContactsService } from 'src/app/services/contacts.service';
import { ConfirmDeleteDialogComponent } from '../confirm-delete-dialog/confirm-delete-dialog.component';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.scss']
})
export class DeleteDialogComponent {

  contactToDelete!: Contact;

  deleteForm = new FormGroup({
    firstName: new FormControl({ value: '', disabled: true }),
    lastName: new FormControl({ value: '', disabled: true }),
    phoneNumber: new FormControl({ value: '', disabled: true }),
    address: new FormControl({ value: '', disabled: true }),
  });

  constructor(
    public dialogRef: MatDialogRef<DeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Contact,
    private contactService: ContactsService,
    public dialog: MatDialog
  ) {
    this.contactToDelete = data;
  }

  ngOnInit() {
    this.deleteForm.controls['firstName'].setValue(this.contactToDelete.firstName);
    this.deleteForm.controls['lastName'].setValue(this.contactToDelete.lastName);
    this.deleteForm.controls['phoneNumber'].setValue(this.contactToDelete.phoneNumber);
    this.deleteForm.controls['address'].setValue(this.contactToDelete.address);
  }

  openConfirmDialog(): void {
    const dialogRef = this.dialog.open(ConfirmDeleteDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (!result) {
        this.onSubmit();
      }
    });
    
  }

  onSubmit() {
    let contactId = this.contactToDelete.id;
    this.contactService.deleteContact(contactId).subscribe({
      next:(data)=>{
        console.log(data);
        
      },
      error:(err)=>{
        console.log(err);
      },
      complete:()=>{
        console.log('Kişi silme işlemi   başarılı ')
      }
    });
    this.dialogRef.close();
  }

}
