export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  /* Getters and Setters */
  // code
  get code() {
    return this._code;
  }

  set code(newCode) {
    this._code = newCode;
  }

  // name
  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = newName;
  }
  /* End Getters and setters */

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
