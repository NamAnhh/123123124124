import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

// get data
export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  quantity: number;
  quantityyyyy?: number;
}

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  @Input() products: any[];
  @Output() onRemoveProduct = new EventEmitter();
  price: number = 5.991;
  // edit 1 vai field
  products2: Partial<Product> = {
    id: 1,
    name: 'PRODUCT ITEM NUMBER 1aaaaa',
  };

  item = {
    id: 1,
    name: 'PRODUCT ITEM NUMBER 1bbbbb',
    description: 'Description for product item number 1',
    price: 5.991,
    quantity: 2,
  };

  employee = null;

  getEmployee = async () => {
    let res = await fetch('https://shopee.vn/api/v4/pages/get_footer_layout');
    const data = await res.json();
    this.employee = data.error_msg;
    console.log('data123', data);
    console.log('employee23123', this.employee);
  };

  ngOnInit() {
    this.getEmployee();
    console.log('products123', this.products);
    console.log('item123', this.item);
  }

  addProduct = () => {
    this.products.push({
      id: this.products.length + 1,
      name: `PRODUCT ITEM NUMBER ${this.products.length + 1}`,
      description: 'Description for product item number 2',
      price: 9.99,
      quantity: 100,
    });
  };

  removeProduct = (product: Product) => {
    this.onRemoveProduct.emit(product);
  };

  onChange = (value: any, product: Product, field: string) => {
    console.log(
      '🚀 ~ file: product-list.component.ts:97 ~ ProductListComponent ~ value:',
      { value, product, field }
    );
    // tìm vị trí thằng cần update
    const index = this.products.findIndex((item) => item.id === product.id);
    console.log(
      '🚀 ~ file: product-list.component.ts:100 ~ ProductListComponent ~ index:',
      index
    );
    // update giá trị tại vị trí đó
    this.products[index][field] = value;
  };
}
