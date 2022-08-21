'strict mode'

const fs = require('fs');
const pathFile = process.argv[2];

fs.readFile(pathFile, 'utf8', (err, content) => {
//	try {
		console.log(content.split('\n').length -1);
//	} catch (err) {
//		console.log(err);
//	}
});

