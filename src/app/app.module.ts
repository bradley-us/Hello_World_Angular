import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GreetingComponent } from './components/greeting/greeting.component';
import { ListsModule } from './modules/lists/lists.module';
import { ContactsListComponent } from './components/contacts-list/contacts-list.component';

@NgModule({
  declarations: [
    AppComponent,
    GreetingComponent,
    ContactsListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // Importamos nuestro módulo personalizado
    ListsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
