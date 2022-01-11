import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  titolo: string = 'Data:';
  date: Date;
  nome: string;
  cognome: string;
  eta: string;
  constructor() {
    this.date = new Date();
  }
  invioDati(nome: string, cognome: string, eta: string) {
    this.nome = nome;
    this.cognome = cognome;
    this.eta = eta;
  }
}
