import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // inputs: ['name']
})
export class AppComponent {
  title = 'helloWorld';
  user = '@bradley'

  receiveMsgFromChild(event: string): any {
    alert(event)
  }
}
