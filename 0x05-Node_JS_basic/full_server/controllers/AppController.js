class AppController {
	static getHomepage(req, res) {
		res.status(200).send('Heloo Holberton School');
	}
}

module.exports = AppController; 
