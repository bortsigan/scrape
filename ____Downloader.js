const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');
const URL = require('url').URL;

function download(url, filepath, callback) {
	console.log(`THE URL ${url} `);

	const userURL = new URL(url);

	const requestCaller = userURL.protocol === "http:" ? http : https;

	const filename = path.basename(url);

	const req = requestCaller.get(url, function(res) {

		const fileStream = fs.createWriteStream(path.resolve(filepath, filename));
		res.pipe(fileStream);

		fileStream.on("error", function(error) {
			console.log("Error writing to the stream.");
			console.warn(error);
		});

	});
}

module.exports.download = download;