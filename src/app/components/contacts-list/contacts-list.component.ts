import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IContact } from 'src/app/models/contact.interface';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss']
})
export class ContactsListComponent implements OnInit, OnDestroy {

  // Creamos una lista de contactos
  contactList: IContact[] = []

  contactSelected: IContact | undefined

  // Subscripción de servicio
  subscription: Subscription | undefined

  // Inyectamos en el constructor el servicio de Contacts
  constructor(private contactService: ContactService) { }

  ngOnInit(): void {

    // Obtener la lista de contactos que nos brinda el servicio
    this.contactService.getAllContacts()
    .then((list: IContact[]) => this.contactList = list)
      .catch((error) => console.error(`Error fetching data ${error}`))
      .finally(() => console.log(`List fetched and ready to use`))
  }

  obtainContact(id: number) {
    this.subscription = this.contactService.getContactByID(id)?.subscribe(
      (contact: IContact) => this.contactSelected = contact
    )
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe()
  }
}
