/**
 * @param {number[]} arr
 * @returns {number}
 */

export default function updateUniqueItems(inputMap) {
    if (!(inputMap instanceof Map)) {
        throw new Error('Cannot process: Input is not a map');
    }
    const updatedMap = new Map();

    inputMap.forEach((quantity, item) => {
        const updatedQuantity = quantity === 1 ? 100 : quantity;
        updatedMap.set(item, updatedQuantity);
    });
    return updatedMap;
}
