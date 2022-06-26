import { Injectable } from '@angular/core';

// Importamos lista del mock
import { CONTACTS } from '../mocks/contacts.mock';
import { IContact } from '../models/contact.interface';

// Importamos Observable de rxjs
import { Observable } from 'rxjs';

/**
 * * DOS PREGUNTAS PARA SABER SI HACER UN
 * * SERVICIO O NO
 * 1. ¿VAMOS A REPRESENTAR INFO INDEPENDIENTE
 * DE UN COMPONENTE?
 *
 * 2. ¿INFO GENÉRICA PARA TODA LA APP?
 */

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() { }

  getAllContacts(): Promise<IContact[]> {
    return Promise.resolve(CONTACTS) // Nos devuelve una lista de contactos
  }

  getContactByID(id: number): Observable<IContact> | undefined {
    // Buscamos el contacto por ID dentro de la lista de CONTACTOS mockeados
    const contact = CONTACTS.find((contact: IContact) => contact.id === id)

    // Creamos un observable
    let observable: Observable<IContact> = new Observable(observer => {
      observer.next(contact) // Emitir un valor a todo componente suscrito
      observer.complete() // No emitimos más valores
    })

    if (contact) {
      return observable
    }

    return
  }
}
