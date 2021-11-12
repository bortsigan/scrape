const puppeteer = require('puppeteer');
const { pageExtend }    = require('puppeteer-jquery');

(async () => {
  const browser = await puppeteer.launch({headless: false});
  const pageOrg = await browser.newPage();
  const page      = pageExtend(pageOrg);
  page.setContent(`<table class="wysiwyg-table" style="width: 99.9071%;">
<thead>
<tr style="background-color: #f7f3f0; text-align: center;">
<td style="width: 33.3333%;"><b>File</b></td>
<td style="width: 33.3333%;"><b>Comment</b></td>
<td style="width: 33.3333%;"><b>Last Update</b></td>
</tr>
</thead>
<tbody>
<tr style="border-color: #e87722;">
<td style="width: 33.3333%;"><a href="/api/public/attachment/biqckdvjq7orh4iripf0/bj83vavjq7otdq3t0bu0" data-documize="true" data-link-space-id="bivc8ufjq7oqncgnk1i0" data-link-id="bj840dfjq7otdq3t0c1g" data-link-target-document-id="bj83ok7jq7otdq3t0bsg" data-link-target-id="bj83vavjq7otdq3t0bu0" data-link-type="file">createit-logo.zip</a></td>
<td style="width: 33.3333%;">standard logos set - multicolored</td>
<td style="width: 33.3333%;">04.04.2019</td>
</tr>
<tr style="border-color: #e87722;">
<td style="width: 33.3333%;"><a href="/api/public/attachment/biqckdvjq7orh4iripf0/c13045l8gmvsiqcnisng" data-documize="true" data-link-space-id="bivc8ufjq7oqncgnk1i0" data-link-id="c1304lt8gmvsiqcnita0" data-link-target-document-id="bj83ok7jq7otdq3t0bsg" data-link-target-id="c13045l8gmvsiqcnisng" data-link-type="file">createit-logo-hi-res.zip</a></td>
<td style="width: 33.3333%;">hi resolution logos set</td>
<td style="width: 33.3333%;">08.03.2021</td>
</tr>
<tr>
<td style="width: 33.3333%;"><a href="/api/public/attachment/biqckdvjq7orh4iripf0/c13040l8gmvsiqcnisn0" data-documize="true" data-link-space-id="bivc8ufjq7oqncgnk1i0" data-link-id="c1305el8gmvsiqcnivc0" data-link-target-document-id="bj83ok7jq7otdq3t0bsg" data-link-target-id="c13040l8gmvsiqcnisn0" data-link-type="file">createit-logo-colored.ai</a></td>
<td style="width: 33.3333%;">colored logo: pdf + ai</td>
<td style="width: 33.3333%;">08.03.2021</td>
</tr>
<tr>
<td style="width: 33.3333%;">
<p><a href="/api/public/attachment/biqckdvjq7orh4iripf0/c4f1sd58gmvshmu2ufv0" data-documize="true" data-link-space-id="bivc8ufjq7oqncgnk1i0" data-link-id="c4f1sdt8gmvshmu2ugr0" data-link-target-document-id="bj83ok7jq7otdq3t0bsg" data-link-target-id="c4f1sd58gmvshmu2ufv0" data-link-type="file">logo-createIT-confidential (1).png</a></p>
<br><br>
<p><a href="/api/public/attachment/biqckdvjq7orh4iripf0/c4f1sd58gmvshmu2ufug" data-documize="true" data-link-space-id="bivc8ufjq7oqncgnk1i0" data-link-id="c4f1sq58gmvshmu2ui0g" data-link-target-document-id="bj83ok7jq7otdq3t0bsg" data-link-target-id="c4f1sd58gmvshmu2ufug" data-link-type="file">logo-createIT-confidential.svg</a></p>
</td>
<td style="width: 33.3333%;">createIT logo with confidential badge</td>
<td style="width: 33.3333%;">18.08.2021</td>
</tr>
<tr>
<td style="width: 33.3333%;"><a href="/api/public/attachment/biqckdvjq7orh4iripf0/c04rf0t8gmvrikka76jg" data-documize="true" data-link-space-id="bivc8ufjq7oqncgnk1i0" data-link-id="c04rf2d8gmvrikka771g" data-link-target-document-id="bj83ok7jq7otdq3t0bsg" data-link-target-id="c04rf0t8gmvrikka76jg" data-link-type="file">createIT_3d.zip</a></td>
<td style="width: 33.3333%;">createIT 3D logo</td>
<td style="width: 33.3333%;">21.01.2021</td>
</tr>
</tbody>
</table>`
);
 

  const trs = await page.jQuery('table > tbody > tr > td').find("a[data-link-type='file']").eq(4).html();

  console.log(trs);


  // let element = await page.jQuery('table.wysiwyg-table:eq(2)) > tbody > tr:nth-child(2) > td').find("br").remove();
  // console.log(element);


  browser.close();
})();