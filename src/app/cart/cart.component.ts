import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service'; 

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items; 

  constructor(
    private cartService: CartService
  ) { }

  getTotal() {
    var total = 0.0; 

    for(let item of this.items) {
      total+=item.price; 
    }

    return total; 
  }

  ngOnInit() {
    this.items = this.cartService.getItems(); 
  }

}