/**
 * @param {number[]} arr
 * @returns {number}
 */

export default function hasValuesFromArray(mySet, myArray) {
    for (const element of myArray) {
        if (!mySet.has(element)) {
            return false; /* Element not found in set */
        }
    }
    return true; /* All elements found in set */
}
