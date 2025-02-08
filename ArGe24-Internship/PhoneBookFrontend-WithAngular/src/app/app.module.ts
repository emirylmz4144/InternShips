import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

// Angular Material
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';

// ag-Grid
import { AgGridModule } from 'ag-grid-angular';

// Components
import { HomeComponent } from './home/home.component';
import { ContactsComponent } from './contacts/contacts.component';
import { NewcontactComponent } from './newcontact/newcontact.component';
import { UpdateDialogComponent } from './dialogs/update-dialog/update-dialog.component';
import { DeleteDialogComponent } from './dialogs/delete-dialog/delete-dialog.component';
import { ConfirmDeleteDialogComponent } from './dialogs/confirm-delete-dialog/confirm-delete-dialog.component';
import { SuccessDeleteDialogComponent } from './dialogs/success-delete-dialog/success-delete-dialog.component';
import { SuccessUpdateDialogComponent } from './dialogs/success-update-dialog/success-update-dialog.component';
import { SuccessAddedDialogComponent } from './dialogs/success-added-dialog/success-added-dialog.component';
import { ViewContactDialogComponent } from './dialogs/view-contact-dialog/view-contact-dialog.component'; // Yeni eklenen
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactsComponent,
    NewcontactComponent,
    UpdateDialogComponent,
    DeleteDialogComponent,
    ConfirmDeleteDialogComponent,
    SuccessDeleteDialogComponent,
    SuccessUpdateDialogComponent,
    SuccessAddedDialogComponent,
    ViewContactDialogComponent // Yeni eklenen
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatTableModule,
    MatCardModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDialogModule,
    MatExpansionModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
