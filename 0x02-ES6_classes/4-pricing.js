import Currency from './3-currency.js';

export default class Pricing {
  constructor(amount, currency) {
    if (!currency instanceof Currency) {
      throw new Error('currency should be of type Currency');
    }

    this._amount = amount;
    this._currency = currency;
  }

  /* Getters and Setters */
  // amount
  get amount() {
    return this._amount;
  }

  set amount(newAmount) {
    this._amount = newAmount;
  }

  // currrency
  get currency() {
    return this._currency;
  }

  set currency(newCurrency) {
    this._currency = newCurrency;
  }
  /* End Getters and Setters */

  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
