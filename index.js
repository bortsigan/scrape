const puppeteer         = require("puppeteer");
const { pageExtend }    = require('puppeteer-jquery');
const fs                = require("fs");
const fsPromises        = require("fs/promises");
const node              = require("node-cron");
const path              = require('path');
const jq                = require('jquery');
const filePath          = path.resolve(__dirname, "files");
const Downloader        = require('./Downloader');

const mainPage  = "https://kb.createit.com";
const email     = "developer@createit.com";
const password  = "HkR9J#fq";

const main_directory = 'Compilations';

(async () => {
    const browser   = await puppeteer.launch({ headless : false }); // { headless : false } open new page
    const pageOrg   = await browser.newPage();
    const page      = pageExtend(pageOrg);
    await page.goto(mainPage);

    await login(page, email, password);

    await page.goto(
        "https://kb.createit.com/s/bivc8ufjq7oqncgnk1i0/2.-marketing/d/bj83ok7jq7otdq3t0bsg/1.-brand-materials-createit",
        { waitUntil: 'load', timeout: 10000 }
    );

    // wait for the appearance of a specific element in the Page
    await page.waitForSelector('div.document-meta > div.document-heading > h1.name', {visible: true});
    
    /**
     1. Check if page tile (h1 element) is already shown
     2. count number of tables existed in the page
     3. loop thru each tables and create folder
     4. before proceeding to the next loop, check number of trs that has downloadables
     5. loop thru trs that has downloadables
     6. then proceed to the next loop of table
     **/    

    let page_title      = await page.jQuery('div.document-meta > div.document-heading > h1.name').html();
    let num_of_tables   = await page.jQuery(`table.wysiwyg-table`);

    for (let table_index = 0; table_index < num_of_tables.length; table_index++) {
        let number_of_rows  = 0;
        let dir_path        = "";
        let title           = await getGroupTitle(page, table_index);

        if (title.toString().indexOf("/") > 0) {
            title = title.toString().replace(/\//ig, 'and');
        }

        if (title.toString().indexOf("&") > 0) {
            title = title.toString().replace(/&amp;/g, '&');
        }

        dir_path = `./${main_directory}/${page_title}/${title}`;

        if (!fs.existsSync(dir_path)) {
            // create path if not existent
            await fsPromises.mkdir( __dirname + dir_path, { recursive: true });
        }

        // set download path
        await page._client.send('Page.setDownloadBehavior', {behavior: 'allow', downloadPath: dir_path});

        number_of_rows  = await page.jQuery(`table.wysiwyg-table:eq(${table_index}) > tbody > tr`);
        
        // loop thru the trs of each table
        for (let table_rows_index = 1; table_rows_index <= number_of_rows.length; table_rows_index++) {
        
            await sleep(3000);
            
            let num_of_br = await page.jQuery(`table.wysiwyg-table:eq(${table_index}) > tbody > tr:nth-child(${table_rows_index}) > td`).find('br');

            // remove br if it exist in the corresponding td element
            // if (num_of_br.length > 0) { await page.jQuery(`table.wysiwyg-table:eq(${table_index}) > tbody > tr:nth-child(${table_rows_index}) > td`).find('br').remove(); }
            
            // check element downloadables inside td of each table
            let element_downloadables = await page
                                                .jQuery(`table.wysiwyg-table:eq(${table_index}) > tbody > tr:nth-child(${table_rows_index}) > td`)
                                                .find(`a[data-link-type='file']`);

            // check if one td has multiple downloadables
            if (element_downloadables.length > 1) {
            
                // loop thru each downloadables 
                for (let elem_len = 0; elem_len < element_downloadables.length; elem_len++) {
                    await sleep(3000);

                    let element_download = await page
                                                    .jQuery(`table.wysiwyg-table:eq(${table_index}) > tbody > tr:nth-child(${table_rows_index}) > td`)
                                                    .find("a[data-link-type='file']")
                                                    .eq(elem_len);
                    
                    if (typeof element_download[0] !== 'undefined') {
                        element_download[0].click();
                    }
                }

            } else {
                if (typeof element_downloadables[0] !== 'undefined') {

                    console.log(await page.jQuery(`table.wysiwyg-table:eq(${table_index}) > tbody > tr:nth-child(${table_rows_index}) > td`).find("a[data-link-type='file']").html() + "\n");
                    element_downloadables[0].click();
                }
            } 
        }
        await sleep(3000);
    }

    
/*    await page._client.send('Page.setDownloadBehavior', {behavior: 'allow', downloadPath: './TestFolder'});

    let sample_index =2;
    let number_of_rows  = await page.jQuery(`table.wysiwyg-table:eq(${sample_index}) > tbody > tr`);

    for (let table_rows = 1; table_rows <= number_of_rows.length; table_rows++) {
        await sleep(3000);

        let element_downloadables = await page
                                            .jQuery(`table.wysiwyg-table:eq(${sample_index}) > tbody > tr:nth-child(${table_rows}) > td`)
                                            .find(`a[data-link-type='file']`);

        let num_of_br = await page.jQuery(`table.wysiwyg-table:eq(${sample_index}) > tbody > tr:nth-child(${table_rows}) > td`).find('br'); 
    
        // if (num_of_br.length > 0) { await page.jQuery(`table.wysiwyg-table:eq(${sample_index}) > tbody > tr:nth-child(${table_rows}) > td`).find('br').replaceWith(" "); } 

        if (element_downloadables.length > 1) {
            
            for (let elem_len = 0; elem_len < element_downloadables.length; elem_len++) {
                await sleep(3000);

                let element_download =  await page
                                                .jQuery(`table.wysiwyg-table:eq(${sample_index}) > tbody > tr:nth-child(${table_rows}) td`)
                                                .find("a[data-link-type='file']")
                                                .eq(elem_len);
            

                if (typeof element_download[0] !== 'undefined') {
                    element_download[0].click();
                }
            }

        } else {

            if (typeof element_downloadables[0] !== 'undefined') {
                element_downloadables[0].click();

                console.log(await page
                        .jQuery(`table.wysiwyg-table:eq(${sample_index}) > tbody > tr:nth-child(${table_rows}) > td > a[data-link-type='file']`)
                        .html() + "\n"
                );
            }
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

let getGroupTitle = (page, index) => {

    let title = page
            .jQuery(`table.wysiwyg-table:eq(${index})`)
            .parent()
            .parent()
            .parent()
            .parent()
            .parent()
            .find('span.page-title')
            .html();

    return title;
    
}