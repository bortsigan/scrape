const fs                = require("fs");
const fsPromises        = require("fs/promises");
const path              = require('path');
const main_directory    = "Compilations";

let downloader = async(page) => {
    let page_title = await page.jQuery('div.document-meta > div.document-heading > h1.name').html();
	let num_of_tables   = await page.jQuery(`table`);

    for (let table_count = 0; table_count < num_of_tables.length; table_count++) {
        let title = await getGroupTitle(page, table_count);

        if (title.toString().indexOf("/") > 0) {
            title = title.toString().replace(/\//ig, '&');
        }

        if (title.toString().indexOf("&") > 0) {
            title = title.toString().replace(/&amp;/g, '&');
        }

        let dir_path = path.resolve(`./${main_directory}/${page_title}/${title}`);

        if (!fs.existsSync(dir_path)) {
            // create path if not existent
            await fsPromises.mkdir(dir_path, {recursive: true});
        }

        // set download path
        await page._client.send('Page.setDownloadBehavior', {behavior: 'allow', downloadPath: dir_path});

        let num_downloadables = await page
                                        .jQuery(`table:eq(${table_count}) > tbody > tr > td`)
                                        .find(`a[data-link-type='file']`);
        
        // loop thru the trs of each table
        for (let index = 0; index < num_downloadables.length; index++) {
            
            // check downloadables element inside td of each table
            let element = await page
                                    .jQuery(`table:eq(${table_count}) > tbody > tr > td`)
                                    .find(`a[data-link-type='file']`)
                                    .eq(index);

            if (typeof element[0] !== 'undefined') {
                element[0].click();
            }
            await sleep(3000);
        }
        await sleep(3000);
    }
}

let getGroupTitle = (page, index) => {

    let title = page
            .jQuery(`table`)
            .eq(index)
            .parent()
            .parent()
            .parent()
            .parent()
            .parent()
            .find('span.page-title')
            .html();

    return title;
}

let sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

module.exports.downloader = downloader;

/**
    Promotional Materials -> Gagdget Design [no wysiwyg-table class]
**/