import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Crypto } from '@level/core-data';

@Component({
  selector: 'level-crypto-list',
  templateUrl: './crypto-list.component.html',
  styleUrls: ['./crypto-list.component.scss']
})
export class CryptoListComponent {
  @Input() coins: Crypto;
  @Output() selected = new EventEmitter();

  selectCoinSubmit(coin) {
    this.selected.emit(coin);
  }
}
