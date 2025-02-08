import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material/dialog';
import { Contact } from 'src/app/interfaces/contact';
import { ContactsService } from 'src/app/services/contacts.service';
import { SuccessUpdateDialogComponent } from '../success-update-dialog/success-update-dialog.component';

@Component({
  selector: 'app-update-dialog',
  templateUrl: './update-dialog.component.html',
  styleUrls: ['./update-dialog.component.scss']
})
export class UpdateDialogComponent implements OnInit {

  updateContact!: Contact;

  updateForm = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    lastName: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    phoneNumber: new FormControl('', [Validators.required, Validators.maxLength(20)]),
    address: new FormControl('', [ Validators.maxLength(200)]),
  });

  contactToUpdate!: Contact;

  constructor(
    public dialogRef: MatDialogRef<UpdateDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Contact,
    private contactService: ContactsService,
    private dialog: MatDialog
  ) {
    this.contactToUpdate = data;
  }

  ngOnInit() {
    this.updateForm.controls['firstName'].setValue(this.contactToUpdate.firstName);
    this.updateForm.controls['lastName'].setValue(this.contactToUpdate.lastName);
    this.updateForm.controls['phoneNumber'].setValue(this.contactToUpdate.phoneNumber);
    this.updateForm.controls['address'].setValue(this.contactToUpdate.address);
    console.log(this.contactToUpdate);
  }

  onSubmit() {

    this.updateContact = {
      id: this.contactToUpdate.id,
      firstName: this.updateForm.controls['firstName'].value as string,
      lastName: this.updateForm.controls['lastName'].value as string,
      phoneNumber: this.updateForm.controls['phoneNumber'].value as string,
      address: this.updateForm.controls['address'].value as string
    };

    //this.contactService.updateContact(this.updateContact);

    this.contactService.updateContact(this.updateContact).subscribe({
      next:(data)=>{
        console.log(data);
        
      },
      error:(err)=>{
        console.log(err);
      },
      complete:()=>{
        console.log('Kişi güncellemesi  başarılı ')
      }
    });

   

    // Güncelleme başarı popup'ı gösterme
    this.dialogRef.close();
    this.dialog.open(SuccessUpdateDialogComponent).afterClosed().subscribe(() => {
      console.log('Update success dialog closed');
    });
  }
}
