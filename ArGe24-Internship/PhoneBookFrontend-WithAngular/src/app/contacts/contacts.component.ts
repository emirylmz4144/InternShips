import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../services/contacts.service';
import { Contact } from '../interfaces/contact';
import { MatDialog } from '@angular/material/dialog';
import { UpdateDialogComponent } from '../dialogs/update-dialog/update-dialog.component';
import { ConfirmDeleteDialogComponent } from '../dialogs/confirm-delete-dialog/confirm-delete-dialog.component';
import { SuccessUpdateDialogComponent } from '../dialogs/success-update-dialog/success-update-dialog.component';
import { MatTableDataSource } from '@angular/material/table';
import { ViewContactDialogComponent } from '../dialogs/view-contact-dialog/view-contact-dialog.component';
import { DeleteDialogComponent } from '../dialogs/delete-dialog/delete-dialog.component';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  contactsDataArray: any = [];
  dataSource = new MatTableDataSource<Contact>();
  columnsToDisplay = ['FirstName', 'LastName', 'Update', 'Delete', 'View'];

  constructor(private contactsService: ContactsService, private dialog: MatDialog) { }

  ngOnInit() {
    this.loadContacts();
  }

  loadContacts() {
    this.contactsService.getContacts().subscribe({
      next:(data)=>{
        console.log(data);
        this.contactsDataArray=data;
        this.dataSource = new MatTableDataSource<Contact>(this.contactsDataArray);
        console.log(this.contactsDataArray);
      },
      error:(err)=>{
        console.log(err);
      },
      complete:()=>{
        console.log('Veriler yüklendi')
      }
    })
    //this.contactsDataArray = this.contactsService.getContacts();
    
  }

  onUpdate(contact: Contact) {
    let dialogRef = this.dialog.open(UpdateDialogComponent, {
      height: '500px',
      width: '500px',
      data: contact,
    });

    dialogRef.afterClosed().subscribe(updatedContact => {
      
        this.contactsService.updateContact(updatedContact);
        // Güncellenmiş verilerle tablonun yeniden yüklenmesi
        this.loadContacts();
        // Başarı mesajını göster
      
      
    });
  }

  onDelete(contact: Contact) {
    let dialogRef = this.dialog.open(ConfirmDeleteDialogComponent, {
      width: '500px',
      data: contact
    });

    dialogRef.afterClosed().subscribe(() => {
      this.loadContacts();
    });
  }

  onView(contact: Contact) {
    this.dialog.open(ViewContactDialogComponent, {
      width: '500px',
      data: contact
    });
  }
}
