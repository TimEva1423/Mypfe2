import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  price: number;
  quantity: number;

}

const ELEMENT_DATA: PeriodicElement[] = [
  {name:'Hydrogen', price: 1.0079, quantity: 1},
  {name:'Helium', price: 4.0026, quantity: 2},
  {name:'Lithium', price: 6.941, quantity: 3},
  
  ];

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent {
  displayedColumns: string[] = ['name', 'price', 'quantity','total', 'etat'];
  dataSource = ELEMENT_DATA;


  constructor() { }

  ngOnInit(): void {
  }

}
