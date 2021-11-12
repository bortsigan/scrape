const puppeteer         = require("puppeteer");
const { pageExtend }    = require('puppeteer-jquery');
const fs                = require("fs");
const fsPromises        = require("fs/promises");
const node              = require("node-cron");
const path              = require('path');
const jq                = require('jquery');
const downloader        = require('./downloader');

const mainPage  = "https://kb.createit.com";
const email     = "developer@createit.com";
const password  = "HkR9J#fq";

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

    await login(page, email, password);

    await page.goto(graphic_stock_link365, {waitUntil: 'load', timeout: 0 });
    await navigationPromise;

    // wait for the appearance of a specific element in the Page
    await page.waitForFunction("document.querySelector('.wysiwyg-table')");

    let page_title = await page.jQuery('div.document-meta > div.document-heading > h1.name').html();

    await downloader.downloader();

/*    await page._client.send('Page.setDownloadBehavior', {behavior: 'allow', downloadPath: path.resolve(`./TestFolder`)});


    let sample_index = 3;
    let number_of_downloadables  = await page
                                            .jQuery(`table`)
                                            .eq(sample_index)
                                            .find('tbody > tr > td')
                                            .find('a');

    console.log(number_of_downloadables.length);
    for (let i = 0; i < number_of_downloadables.length; i++) {
        console.log(i);

        let element = await page.jQuery(`table`).eq(sample_index).find(`a[data-link-type='file']`).eq(i);
        element[0].click();

        console.log(await page.jQuery(`table`).eq(sample_index).find(`a[data-link-type='file']`).eq(i).html());
        
        sleep(5000);
    }*/

    /*
    let sample_index = 0;

    for (let sample_index = 0; sample_index < 2; sample_index++) {
        console.log("\ntable: " + sample_index);

        let number_of_downloadables = await page.jQuery(`table:eq(${sample_index}) > tbody > tr > td`).find(`a[data-link-type='file']`);
        for (let index = 0; index < number_of_downloadables.length; index++) {
            await sleep(3000);

            let element = await page.jQuery(`table:eq(${sample_index}) > tbody > tr > td`).find(`a[data-link-type='file']`).eq(index);
            let html = await page.jQuery(`table:eq(${sample_index}) > tbody > tr > td > a[data-link-type='file']`).eq(index).html();
            console.log("\nitem #: (" + index + ") item name : " + html);
            element[0].click();
        }
    }*/

})();

let sleep = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
}

let login = async (page, email, password) => {

    await page.waitForSelector(".auth-box");
    await page.type("#authEmail", email, { delay : 100});
    await page.type("#authPassword", password, { delay : 100 });
    await page.click("#ember4");
    await page.waitForNavigation();
};



let downloadPath = async (fs, page, group) => {
    let groupPath = `./Compilations/${group}`;

}

async function autoScroll(page){
    await page.evaluate(async () => {
        await new Promise((resolve, reject) => {
            var totalHeight = 0;
            var distance = 100;
            var timer = setInterval(() => {
                var scrollHeight = document.body.scrollHeight;
                window.scrollBy(0, distance);
                totalHeight += distance;

                if(totalHeight >= scrollHeight){
                    clearInterval(timer);
                    resolve();
                }
            }, 100);
        });
    });
}
