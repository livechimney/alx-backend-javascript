/**
 * Simulates an API call to get a payment token
 * @param {boolean} success - Whether the API call is successful or not
 * @returns {Promise} A Promise that resolves with an object containing
 * a "data" property if success is true. Otherwise, the Promise does nothing.
 */
function getPaymentTokenFromApi(success) {
    return new Promise((resolve, reject) => {
        if (success) {
            resolve({ data: 'Successful response from the API' });
        } else {
            resolve({ data: '' });
        }
    });
}

module.exports = getPaymentTokenFromApi;
