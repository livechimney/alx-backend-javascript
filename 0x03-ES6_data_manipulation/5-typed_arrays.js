/**
 * Returns a new ArrayBuffer with an Int8 value
 * at a specific location
 * @param {number} length - the buffer length
 * @param {number} position - the buffer position to modify
 * @param {number} value - the value to be stored in the position
 * @returns {DataView}
 */
export default function createInt8TypedArray(length, position, value) {
    const buffer = new DataView(new ArrayBuffer(length), 0, length);
    buffer.setInt8(position, value);

    if (position >= length) {
        throw new Error('Position outside range');
    }

    return buffer;
}
