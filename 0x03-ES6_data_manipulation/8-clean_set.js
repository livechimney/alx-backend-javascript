/**
 * @param {number[]} arr
 * @returns {number}
 */

export default function cleanSet(set, startString) {
    const result = [];
    if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') {
        return '';
    }
    for (const value of set.values()) {
        if (typeof value === 'string' && value.startsWith(startString)) {
            const valueSubstring = value.substring(startString.length);

            if (valueSubstring && valueSubstring !== value) {
                result.push(valueSubstring);
            }
        }
    }

    return result.join('-');
}
