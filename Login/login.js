const email     = "developer@createit.com";
const password  = "HkR9J#fq";

let login = async (page) => {

    await page.waitForSelector(".auth-box");
    await page.type("#authEmail", email, { delay : 100});
    await page.type("#authPassword", password, { delay : 100 });
    await page.click("#ember4");
    await page.waitForNavigation();
};

module.exports.login = login;
