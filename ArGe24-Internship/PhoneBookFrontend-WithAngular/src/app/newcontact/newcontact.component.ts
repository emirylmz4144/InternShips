import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactsService } from '../services/contacts.service';
import { Contact } from '../interfaces/contact';
import { MatDialog } from '@angular/material/dialog';
import { SuccessAddedDialogComponent } from '../dialogs/success-added-dialog/success-added-dialog.component'; // Yeni eklenen
import { ContactsComponent } from '../contacts/contacts.component';

@Component({
  selector: 'app-newcontact',
  templateUrl: './newcontact.component.html',
  styleUrls: ['./newcontact.component.scss']
})
export class NewcontactComponent {

  contactsComponent!:ContactsComponent;
  newContact!: Contact;

  contactForm = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    lastName: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    phoneNumber: new FormControl('', [Validators.required, Validators.maxLength(20)]),
    address: new FormControl('', [ Validators.maxLength(200)]),
  });

  constructor(
    private router: Router,
    private contactsService: ContactsService,
    private dialog: MatDialog // Yeni eklenen
  ) { }

  onSubmit() {
    this.newContact = {
      id: 0,
      firstName: this.contactForm.controls['firstName'].value as string,
      lastName: this.contactForm.controls['lastName'].value as string,
      phoneNumber: this.contactForm.controls['phoneNumber'].value as string,
      address: this.contactForm.controls['address'].value as string
    };

    this.contactsService.createContact(this.newContact).subscribe({
      next:(data)=>{
        console.log(data);
        this.contactsComponent.loadContacts();
      },
      error:(err)=>{
        console.log(err);
      },
      complete:()=>{
        console.log('Yeni kayıt oluşturma başarılı ')
        
      }
    });

    
    console.log(this.contactsService.getContacts());

    // Başarı mesajı için dialog açılır
    this.dialog.open(SuccessAddedDialogComponent, {
      width: '300px'
    });

    this.router.navigate(['/contacts']);
    
  }

  onCancel() {
    this.router.navigate(['/contacts']);
  }

  
}
