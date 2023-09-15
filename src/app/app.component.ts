import { Component } from '@angular/core';
import { Product } from './product-list/product-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-shopping-cart 123';
  headerTitle = 'abcxyz123';
  products: any[] = [
    {
      id: 1,
      name: 'PRODUCT ITEM NUMBER 1aaaaa',
      description: 'Description for product item number 1',
      price: 5444444555.9991,
      quantity: 2,
      quantityyyyy: 3,
    },
    {
      id: 2,
      name: 'PRODUCT ITEM NUMBER 2',
      description: 'Description for product item number 2',
      price: 9.99,
      quantity: 1,
    },
    {
      id: 3,
      name: 'PRODUCT ITEM NUMBER 3',
      description: 'Description for product item number 2',
      price: 9.99,
      quantity: 100,
    },
    {
      id: 4,
      name: 'PRODUCT ITEM NUMBER 4a',
      description: 'Description for product item number 2',
      price: 9.99,
      quantity: 1,
    },
  ];

  ngOnInit() {
    this.products = this.products.map(item => {
      item.price = item.price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
      item.aa = 1;
      item.bb = 1;
      delete item?.bb
      return item
    })
    console.log('vaoo day', this.products)
  }

  removeProduct = (product: Product) => {
    this.products = this.products.filter(
      (item: Product) => item.id !== product.id
    );
  };
}
