import { Component, OnInit } from '@angular/core';

export type Product = {
  name: string,
  price: number,
  description: string
}

@Component({
  selector: 'app-basic-list',
  templateUrl: './basic-list.component.html',
  styleUrls: ['./basic-list.component.scss']
})
export class BasicListComponent implements OnInit {



  colorT: string = 'tomato'
  classUnderline: string = 'underliner'

  elementsList: Product[] = [
    {
      name: 'Leche',
      price: 2,
      description: 'Leche entera'
    },
    {
      name: 'Calne',
      price: 20,
      description: 'Calne de celdo'
    },
    {
      name: 'Veldula',
      price: 1,
      description: 'Pimiento chico!'
    },
    {
      name: 'Webos',
      price: 4,
      description: 'Webos de gallinazo'
    },
  ]
  isLoading: boolean = true

  option: number = 0

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.changeIsLoading()
    }, 1000)
  }

  changeIsLoading() {
    this.isLoading = !this.isLoading
  }

  chooseOption(optionChosen: number) {
    this.option = optionChosen // El valor cambia, emplica un cambio en los elementos renderizados
  }

}
