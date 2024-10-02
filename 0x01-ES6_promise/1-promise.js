export default function getFullResponseFromAPI(succes) {
    return new Promise((resolve, reject) => {
        if (succes) {
            resolve({
                status: 200,
                body: 'Success',
            });
        } else {
            reject(new Error('The fake API is not working currently'));
        }
    });
}
