import { Component, OnInit, OnDestroy, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.scss']
})
export class GreetingComponent implements OnInit, OnDestroy, OnChanges {

  // Recibimos el valor desde el componente padre (app.component)
  @Input()
  name: string = "Bradley"

  @Output() msgEmitter = new EventEmitter<string>()


  constructor() { }

  ngOnInit(): void {
    // Instrucciones previas a la renderización del componente
    console.log('ngOnInit del componente')
  }

  /**
   * Ejemplo para gestionar un evento tipo click en el DOM
   */
  sendMsgToFather(): void {
    // alert(`Hey baby ${this.name}! How you doing?`)
    this.msgEmitter.emit(`Hola, ${this.name}. Mensaje enviado desde el componente hijo (greeting)`)
  }

  ngOnDestroy(): void {
    console.log('Componente greeting desaparece')
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(`Componente Greeting ha cambiado. Valor anterior, ${changes}`)
  }
}

// Orden ciclo de vida
/**
 * * 1. ngOnChanges
 * * 2. ngOnInit
 * 3. ngAfterContentInit
 * 4. ngAfterContentChecked
 * 5. ngAfterViewInit
 * 6. ngAfterViewChecked
 * 7. ngAfterContentChecked
 * 8. ngAfterViewChecked
 * * 9. ngOnDestroy
 */
