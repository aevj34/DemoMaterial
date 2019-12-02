import { Component, OnInit, ViewChild } from '@angular/core';
import { Fruit } from '../models/fruit';
import { Car } from '../models/car';
import { NgForm } from '@angular/forms';

declare var $: any;

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styles: []
})

export class PruebaComponent implements OnInit {

  fruits: Fruit[] =
  [
 {
   id: 1,
   name: 'Manzana'
 },
 {
   id: 2,
   name: 'Piña'
 },
 {
   id: 3,
   name: 'Naranja'
 },
 {
  id: 4,
  name: 'Pera'
},
{
  id: 5,
  name: 'Durazno'
},
]

cars: Car[] =
[
{
 code: '123456',
 description: 'description of Toyota',
 brand: 'Toyota'
},
{
  code: '234567',
  description: 'description of Chevrolet',
  brand: 'Chevrolet'
},
{
  code: '345678',
  description: 'description of Nissan',
  brand: 'Nissan'
},
{
  code: '456789',
  description: 'description of Dodge',
  brand: 'Dodge'
},
]


selectedId: number;
selectedCode: number;

  constructor() { }

  ngOnInit() {

  }


}
