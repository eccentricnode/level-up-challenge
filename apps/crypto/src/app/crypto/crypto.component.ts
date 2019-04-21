import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { Crypto, CryptoService } from '@level/core-data';

@Component({
  selector: 'level-crypto',
  templateUrl: './crypto.component.html',
  styleUrls: ['./crypto.component.scss']
})
export class CryptoComponent implements OnInit {
  form: FormGroup;
  cryptoCoins$;
  selectedCoin: Crypto;

  constructor(
    private cryptoService: CryptoService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.initForm();
    this.getCryptoCoins();
    this.resetCoin();
  }

  selectCoin(coin) {
    this.selectedCoin = coin;
  }

  getCryptoCoins() {
    this.cryptoCoins$ = this.cryptoService.all();
  }

  resetCoin() {
    const emptyCoin: Crypto =  {
      name: '',
      rank: null,
      price_usd: '',
      percent_change_24h: '',
      percent_change_7d: ''
    }
    this.selectCoin(emptyCoin);
  }

  initForm() {
    this.form = this.formBuilder.group({
      name: {value: '', disabled: true},
      rank: {value: '', disabled: true},
      price_usd: {value: '', disabled: true},
      percent_change_24h: {value: '', disabled: true},
      percent_change_7d: {value: '', disabled: true},
    })
  }
}
