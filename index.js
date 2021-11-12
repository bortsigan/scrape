const puppeteer         = require("puppeteer");
const { pageExtend }    = require('puppeteer-jquery');
const fs                = require("fs");
const fsPromises        = require("fs/promises");
const path              = require('path');
const downloader        = require('./Downloader/downloader.js');
const login             = require('./Downloader/downloader.js');

const mainPage          = "https://kb.createit.com";

const brand_materials_createit = "https://kb.createit.com/s/bivc8ufjq7oqncgnk1i0/2.-marketing/d/bj83ok7jq7otdq3t0bsg/1.-brand-materials-createit";
const promotional_materials = "https://kb.createit.com/s/bivc8ufjq7oqncgnk1i0/2.-marketing/d/bj84du7jq7otdq3t0g70/3.-promotional-materials";
const graphic_stock_createit = "https://kb.createit.com/s/bivc8ufjq7oqncgnk1i0/2.-marketing/d/bjdd5dfjq7ohb323d07g/4.-graphic-stock-createit";
const graphic_stock_link365 = "https://kb.createit.com/s/bivc8ufjq7oqncgnk1i0/2.-marketing/d/bjdbcsvjq7ohb323d010/5.-graphic-stock-link365";

(async () => {
    const browser   = await puppeteer.launch({ headless : true }); // { headless : false } open new page
    const pageOrg   = await browser.newPage();
    const page      = pageExtend(pageOrg);
    const navigationPromise = page.waitForNavigation({waitUntil: "domcontentloaded"});

    await page.goto(mainPage);

    await login(page);

    await page.goto(graphic_stock_link365, {waitUntil: 'load', timeout: 0 });

    await navigationPromise;

    // wait for the appearance of a specific element in the Page
    await page.waitForFunction("document.querySelector('.wysiwyg-table')");

    // execute download
    await downloader.downloader(page);
})();


