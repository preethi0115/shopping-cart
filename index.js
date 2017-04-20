const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const items = require('./items');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/get-items', (req, res) => {
	res.json(items);
});

app.post('/checkout', (req, res) => {
	const hasError = !req.body.items;
	let response;

	if (hasError) {
		response = {
			status: 'error',
			error: 'Invalid request.',
		};
	} else {
		response = {
			status: 'success',
			message: 'Your order was placed successfully.',
		};
	}

	res.json(response);
});

app.listen(3001, () => console.log('Shopping Cart API app listening on port 3001!'));
