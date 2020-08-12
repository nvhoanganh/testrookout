const express = require('express');

const rookout = require('rookout');
rookout.start({
	token: 'ecbae15c971c010f7d37ef6f93d8f55b3729118c32bb1d5f82ae3262a09145d8',
	labels: {
		env: 'dev', // Optional,see Labels page below Projects
	},
});

const app = express();
const port = 3000;

app.get('/', (req, res) => {
	res.send('Hello World!');
});

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});
