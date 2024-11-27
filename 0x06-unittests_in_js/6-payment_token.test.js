const { expect } = require('chai');
const assert = require('assert');

const getPaymentTokenFromApi = require('./6-payment_token');

describe('getPaymentTokenFromApi', () => {
    it('returns a resolved promise with the object { data: "Successful response from the API" } when success is true', (done) => {
        getPaymentTokenFromApi(true)
            .then((response) => {
                assert.deepStrictEqual(response, { data: 'Successful response from the API' });
                done();
            })
            .catch((error) => {
                done(error);
            });
    });



    it.skip('should return a rejected promise when success is false', () => new Promise((done) => {
        getPaymentTokenFromApi(false, (err) => {
            try {
                assert.strictEqual(err, 'Error');
                done();
            } catch (err) {
                done(err);
            }
        });
    }));
});
