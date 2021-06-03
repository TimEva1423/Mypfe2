import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  price: number;
  quantity: number;
 statue:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {name:'Hydrogen', price: 1.0079, quantity: 1,statue:'livraison en cours'},
  {name:'Helium', price: 4.0026, quantity: 2,statue:'livraison éffectuée'},
  {name:'Lithium', price: 6.941, quantity: 3,statue:'livraison éffectuée'},
  
  ];


@Component({
  selector: 'app-order-model',
  templateUrl: './order-model.component.html',
  styleUrls: ['./order-model.component.css']
})
export class OrderModelComponent  {
  displayedColumns: string[] = ['name', 'price', 'quantity','total', 'statue','etat'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
