const puppeteer         = require("puppeteer");
const { pageExtend }    = require('puppeteer-jquery');
const fs                = require("fs/promises");
const node              = require("node-cron");
const path              = require('path');
const jq                = require('jquery');
const Downloader 		= require('./Downloader');

const filePath = path.resolve(__dirname, "images");

(async () => {
	const browser = await puppeteer.launch({ headless : false });// { headless : false } open new page
	const page = await browser.newPage();
	await page.goto("https://books.toscrape.com/");

	const urls = await page.$$eval(".product_pod .thumbnail", imgs => imgs.map(img => img.src));

	urls.forEach(imgURL => {
		Downloader.download(imgURL, filePath, function(filename) {
			console.log("Download complete for " + filename);
		});
		console.warn('here \n');
	});

	await browser.close();
})();
