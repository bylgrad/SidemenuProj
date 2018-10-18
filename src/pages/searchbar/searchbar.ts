import { Component } from '@angular/core';


@Component({
  templateUrl: 'searchbar.html'
})
export class SearchbarPage {
  items;

  constructor() {
    this.initializeItems();
  }

  initializeItems() {
    this.items = [
      'Apple',
      'Blackberry',
      'Cherry Mobile',
      'Cloudfone',
      'Doogee',
      'Google',
      'Honor',
      'Huawei',
      'HTC',
      'Infinix',
      'Lenovo',
      'LG',
      'Motorola',
      'My|Phone',
      'Nokia',
      'Oppo',
      'Samsung',
      'SKK',
      'Vivo',
      'Xiaomi'
    ];
  }

  getItems(ev) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
}