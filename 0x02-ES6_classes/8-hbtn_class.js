export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  // Modify the print value when object is invoked
  // with Number and String eg Number(instance)
  [Symbol.toPrimitive](dataType) {
    if (dataType === 'number') return this._size;
    if (dataType === 'string') return this._location;
    return undefined;
  }
}
