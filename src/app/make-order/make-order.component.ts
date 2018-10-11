import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-make-order',
  templateUrl: './make-order.component.html',
  styleUrls: ['./make-order.component.css']
})
export class MakeOrderComponent implements OnInit {
  orders: {id: number, unitPrice: number, quantity: number }[] = [{id: 1, quantity: 2, unitPrice: 200},
                                                                  {id: 2, quantity: 1, unitPrice: 300}];
  drinks: {id: string, unitPrice: number, item: string}[] = [
                                                            {id: 'D1', unitPrice: 20, item: 'wine'},
                                                            {id: 'D2', unitPrice: 5, item: 'Beer'},
                                                            {id: 'D3', unitPrice: 3, item: 'Water'}];
  foods: {id: string, unitPrice: number, item: string}[] = [
                                                            {id: 'F1', unitPrice: 20, item: 'Jollof'},
                                                            {id: 'F2', unitPrice: 10, item: 'Chips'},
                                                            {id: 'F3', unitPrice: 15, item: 'Soup'}];
  constructor() { }

  ngOnInit() {
  }

  selectItem(selectedOrder) {
  }

}
