import { Component, OnInit } from '@angular/core';
import {IProduct} from  "../interfaces/IProduct";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public  products: IProduct[] = [{
    id:1,
    name: "core i3",
    price: 300,
    sale: 250,
    photo: "../assets/images/image.jpg"
  },
    {
      id:2,
      name: "core i5",
      price: 500,
      sale: null,
      photo: "../assets/images/image.jpg"
    },
    {
      id:3,
      name: "core i7",
      price: 700,
      sale: 650,
      photo: "../assets/images/image.jpg"
    },
    {
      id:4,
      name: "core i9",
      price: 900,
      sale: 700,
      photo: "../assets/images/image.jpg"
    }];

  constructor() { }

  ngOnInit() {
  }

}
