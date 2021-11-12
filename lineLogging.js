let logTitle = (title) => {
	return `\n------ TABLE NAME: ${title} ---------`;
}

let logItem = (table_row, index) => {
	let html = await page
                    .jQuery(`table:eq(${table_index}) > tbody > tr > td`)
                    .find(`a[data-link-type='file']`)
                    .eq(index)
                    .html();

    return "\nitem #: (" + index + ") item name : " + html;
}

module.exports = {logTitle, logItem};