const puppeteer = require('puppeteer');
const { pageExtend }    = require('puppeteer-jquery');

(async () => {
  const browser = await puppeteer.launch({headless: false});
  const pageOrg = await browser.newPage();
  const page      = pageExtend(pageOrg);
  page.setContent(`<table class="wysiwyg-table" style="width: 100%; height: 680px;">
<thead>
<tr style="height: 32px;">
<th style="height: 32px; width: 25.0464%;">Name</th>
<th style="height: 32px; width: 24.9536%;">File</th>
<th style="height: 32px; width: 24.9536%;">Comment</th>
<th style="height: 32px; width: 24.9536%;">Last Update</th>
</tr>
</thead>
<tbody>
<tr style="height: 32px;">
<td style="width: 25.0464%; height: 32px;">Company in a glance brochure</td>
<td style="width: 24.9536%; height: 32px;"><a href="/api/public/attachment/biqckdvjq7orh4iripf0/c04r79l8gmvrikka6uig" data-documize="true" data-link-space-id="bivc8ufjq7oqncgnk1i0" data-link-id="c04r8c58gmvrikka71o0" data-link-target-document-id="bj84du7jq7otdq3t0g70" data-link-target-id="c04r79l8gmvrikka6uig" data-link-type="file">createIT at a glance january_2021_2.pdf</a></td>
<td style="width: 24.9536%; height: 32px;">createIT introduction, phone number updated</td>
<td style="width: 24.9536%; height: 32px;">21.01.2021</td>
</tr>
<tr style="height: 53px;">
<td style="width: 25.0464%; height: 53px;">Outsourcing services brochure</td>
<td style="width: 24.9536%; height: 53px;"><a href="/api/public/attachment/biqckdvjq7orh4iripf0/bkhii6njq7osksebff2g" data-documize="true" data-link-space-id="bivc8ufjq7oqncgnk1i0" data-link-id="bkhii9vjq7osksebffm0" data-link-target-document-id="bj84du7jq7otdq3t0g70" data-link-target-id="bkhii6njq7osksebff2g" data-link-type="file">createIT-Developer Outsourcing updated july19.pdf</a></td>
<td style="width: 24.9536%; height: 53px;">outsourcing/bod leasing services, phone number updated</td>
<td style="width: 24.9536%; height: 53px;">29.05.2019</td>
</tr>
<tr style="height: 53px;">
<td style="width: 25.0464%; height: 53px;">Portfolio brochure</td>
<td style="width: 24.9536%; height: 53px;"><a href="/api/public/attachment/biqckdvjq7orh4iripf0/c04r78l8gmvrikka6ui0" data-documize="true" data-link-space-id="bivc8ufjq7oqncgnk1i0" data-link-id="c04r8kl8gmvrikka72k0" data-link-target-document-id="bj84du7jq7otdq3t0g70" data-link-target-id="c04r78l8gmvrikka6ui0" data-link-type="file">Portfolio-onepage updated 20_01_2021.pdf</a></td>
<td style="width: 24.9536%; height: 53px;">portfolio onepager, pdf</td>
<td style="width: 24.9536%; height: 53px;">21.01.2021</td>
</tr>
<tr style="height: 53px;">
<td style="width: 25.0464%; height: 276px;" rowspan="6">SEO&nbsp;</td>
<td style="width: 24.9536%; height: 53px;"><a href="/api/public/attachment/biqckdvjq7orh4iripf0/bkhhhs7jq7osksebfau0" data-documize="true" data-link-space-id="bivc8ufjq7oqncgnk1i0" data-link-id="bkhhid7jq7osksebfbf0" data-link-target-document-id="bj84du7jq7otdq3t0g70" data-link-target-id="bkhhhs7jq7osksebfau0" data-link-type="file">SEO.png</a></td>
<td style="width: 24.9536%; height: 53px;">Ongoing fine tuning ans results monitoring diagram</td>
<td style="width: 24.9536%; height: 53px;">08.07.2019</td>
</tr>
<tr style="height: 53px;">
<td style="width: 24.9536%; height: 53px;"><a href="/api/public/attachment/biqckdvjq7orh4iripf0/bkhhi1fjq7osksebfavg" data-documize="true" data-link-space-id="bivc8ufjq7oqncgnk1i0" data-link-id="bkhhignjq7osksebfceg" data-link-target-document-id="bj84du7jq7otdq3t0g70" data-link-target-id="bkhhi1fjq7osksebfavg" data-link-type="file">seo.psd</a></td>
<td style="width: 24.9536%; height: 53px;">Ongoing fine tuning ans results monitoring diagram</td>
<td style="width: 24.9536%; height: 53px;">08.07.2019</td>
</tr>
<tr style="height: 32px;">
<td style="width: 24.9536%; height: 32px;"><a href="/api/public/attachment/biqckdvjq7orh4iripf0/bkhhhrvjq7osksebfatg" data-documize="true" data-link-space-id="bivc8ufjq7oqncgnk1i0" data-link-id="bkhhij7jq7osksebfcug" data-link-target-document-id="bj84du7jq7otdq3t0g70" data-link-target-id="bkhhhrvjq7osksebfatg" data-link-type="file">SEO2.png</a></td>
<td style="width: 24.9536%; height: 32px;">4 areas of SEO</td>
<td style="width: 24.9536%; height: 32px;">08.07.2019</td>
</tr>
<tr style="height: 53px;">
<td style="width: 24.9536%; height: 53px;"><a href="/api/public/attachment/biqckdvjq7orh4iripf0/bkhhi1fjq7osksebfav0" data-documize="true" data-link-space-id="bivc8ufjq7oqncgnk1i0" data-link-id="bkhhin7jq7osksebfdt0" data-link-target-document-id="bj84du7jq7otdq3t0g70" data-link-target-id="bkhhi1fjq7osksebfav0" data-link-type="file">seo-pl.psd</a></td>
<td style="width: 24.9536%; height: 53px;">Ongoing fine tuning ans results monitoring diagram PL</td>
<td style="width: 24.9536%; height: 53px;">08.07.2019</td>
</tr>
<tr style="height: 53px;">
<td style="width: 24.9536%; height: 53px;"><a href="/api/public/attachment/biqckdvjq7orh4iripf0/bkhhhs7jq7osksebfaug" data-documize="true" data-link-space-id="bivc8ufjq7oqncgnk1i0" data-link-id="bkhhip7jq7osksebfek0" data-link-target-document-id="bj84du7jq7otdq3t0g70" data-link-target-id="bkhhhs7jq7osksebfaug" data-link-type="file">seo-pl.png</a></td>
<td style="width: 24.9536%; height: 53px;">Ongoing fine tuning ans results monitoring diagram PL</td>
<td style="width: 24.9536%; height: 53px;">08.07.2019</td>
</tr>
<tr style="height: 32px;">
<td style="width: 24.9536%; height: 32px;"><a href="/api/public/attachment/biqckdvjq7orh4iripf0/brh2v4vjq7osjogpkr0g" data-documize="true" data-link-space-id="bivc8ufjq7oqncgnk1i0" data-link-id="brh2v7fjq7osjogpkra0" data-link-target-document-id="bj84du7jq7otdq3t0g70" data-link-target-id="brh2v4vjq7osjogpkr0g" data-link-type="file">Oferta SEO, Remarketing GA_2020_v1.docx</a></td>
<td style="width: 24.9536%; height: 32px;">example of SEO offer</td>
<td style="width: 24.9536%; height: 32px;">11.06.2020</td>
</tr>
<tr style="height: 32px;">
<td style="width: 25.0464%; height: 64px;" rowspan="2">Project flow</td>
<td style="width: 24.9536%; height: 32px;"><a href="/api/public/attachment/biqckdvjq7orh4iripf0/bm8tfcvjq7osln7bnrog" data-documize="true" data-link-space-id="bivc8ufjq7oqncgnk1i0" data-link-id="bm8tfjvjq7osln7bnsag" data-link-target-document-id="bj84du7jq7otdq3t0g70" data-link-target-id="bm8tfcvjq7osln7bnrog" data-link-type="file">createIT-project-flow_web_updated.pdf</a></td>
<td style="width: 24.9536%; height: 32px;">project flow borchure, pdf</td>
<td style="width: 24.9536%; height: 32px;">30.09.2019</td>
</tr>
<tr style="height: 32px;">
<td style="width: 24.9536%; height: 32px;"><a href="/api/public/attachment/biqckdvjq7orh4iripf0/bkrflqfjq7ondiu7747g" data-documize="true" data-link-space-id="bivc8ufjq7oqncgnk1i0" data-link-id="bkrfns7jq7ondiu774s0" data-link-target-document-id="bj84du7jq7otdq3t0g70" data-link-target-id="bkrflqfjq7ondiu7747g" data-link-type="file">work flow PL.pdf</a></td>
<td style="width: 24.9536%; height: 32px;">project flow scheme - PL</td>
<td style="width: 24.9536%; height: 32px;">23.07.2019</td>
</tr>
<tr style="height: 53px;">
<td style="width: 25.0464%; height: 53px;">GDPR adaptations</td>
<td style="width: 24.9536%; height: 53px;"><a href="/api/public/attachment/biqckdvjq7orh4iripf0/c4mc1od8gmvshmu2ujh0" data-documize="true" data-link-space-id="bivc8ufjq7oqncgnk1i0" data-link-id="c4mc1ul8gmvshmu2ujsg" data-link-target-document-id="bj84du7jq7otdq3t0g70" data-link-target-id="c4mc1od8gmvshmu2ujh0" data-link-type="file">GDPR-adaptations-offer_21.pdf</a></td>
<td style="width: 24.9536%; height: 53px;">gdpr offer</td>
<td style="width: 24.9536%; height: 53px;">30.08.2021</td>
</tr>
<tr style="height: 32px;">
<td style="width: 25.0464%; height: 32px;" rowspan="2">createIT in numbers<br><br></td>
<td style="width: 24.9536%; height: 32px;"><a href="/api/public/attachment/biqckdvjq7orh4iripf0/c0bvri58gmvrikka7jr0" data-documize="true" data-link-space-id="bivc8ufjq7oqncgnk1i0" data-link-id="c0bvrrd8gmvrikka7k80" data-link-target-document-id="bj84du7jq7otdq3t0g70" data-link-target-id="c0bvri58gmvrikka7jr0" data-link-type="file">PL_v1.png</a></td>
<td style="width: 24.9536%; height: 32px;">createIt in numbers PL</td>
<td style="width: 24.9536%; height: 32px;">01.02.2021</td>
</tr>
<tr style="height: 32px;">
<td style="width: 24.9536%; height: 32px;"><a href="/api/public/attachment/biqckdvjq7orh4iripf0/c0bvri58gmvrikka7jqg" data-documize="true" data-link-space-id="bivc8ufjq7oqncgnk1i0" data-link-id="c0bvs758gmvrikka7lag" data-link-target-document-id="bj84du7jq7otdq3t0g70" data-link-target-id="c0bvri58gmvrikka7jqg" data-link-type="file">ENG_v1.png</a></td>
<td style="width: 24.9536%; height: 32px;">createIT in number EN</td>
<td style="width: 24.9536%; height: 32px;">01.02.2021</td>
</tr>
<tr>
<td style="width: 25.0464%;" rowspan="2">createIT services</td>
<td style="width: 24.9536%;"><a href="/api/public/attachment/biqckdvjq7orh4iripf0/bm8uannjq7osln7bnsi0" data-documize="true" data-link-space-id="bivc8ufjq7oqncgnk1i0" data-link-id="bm8uapvjq7osln7bnt60" data-link-target-document-id="bj84du7jq7otdq3t0g70" data-link-target-id="bm8uannjq7osln7bnsi0" data-link-type="file">infografika_pl.png</a></td>
<td style="width: 24.9536%;">services infographic PL</td>
<td style="width: 24.9536%;">30.09.2019</td>
</tr>
<tr>
<td style="width: 24.9536%;"><a href="/api/public/attachment/biqckdvjq7orh4iripf0/bm8uannjq7osln7bnshg" data-documize="true" data-link-space-id="bivc8ufjq7oqncgnk1i0" data-link-id="bm8ub37jq7osln7bnttg" data-link-target-document-id="bj84du7jq7otdq3t0g70" data-link-target-id="bm8uannjq7osln7bnshg" data-link-type="file">infografika_eng.png</a></td>
<td style="width: 24.9536%;">services infographic EN</td>
<td style="width: 24.9536%;">30.09.2019</td>
</tr>
<tr>
<td style="width: 25.0464%;">createIT for FinTech&nbsp;</td>
<td style="width: 24.9536%;"><a href="/api/public/attachment/biqckdvjq7orh4iripf0/bnkgrcvjq7osj4mmojfg" data-documize="true" data-link-space-id="bivc8ufjq7oqncgnk1i0" data-link-id="bnkgrd7jq7osj4mmok0g" data-link-target-document-id="bj84du7jq7otdq3t0g70" data-link-target-id="bnkgrcvjq7osj4mmojfg" data-link-type="file">createIT-for-fintech-companies.pdf</a></td>
<td style="width: 24.9536%;">createIT for fintech companies brochure</td>
<td style="width: 24.9536%;">05.12.2019</td>
</tr>
<tr>
<td style="width: 25.0464%;">OXID Folder</td>
<td style="width: 24.9536%;"><a href="/api/public/attachment/biqckdvjq7orh4iripf0/c4mc1od8gmvshmu2ujhg" data-documize="true" data-link-space-id="bivc8ufjq7oqncgnk1i0" data-link-id="c4mc29t8gmvshmu2ul9g" data-link-target-document-id="bj84du7jq7otdq3t0g70" data-link-target-id="c4mc1od8gmvshmu2ujhg" data-link-type="file">Oxid_brochure_createIT_21.pdf</a></td>
<td style="width: 24.9536%;">nearshoring / programming services / oxid</td>
<td style="width: 24.9536%;">30.08.2021</td>
</tr>
<tr>
<td style="width: 25.0464%;">WordPress brochure</td>
<td style="width: 24.9536%;"><a href="/api/public/attachment/biqckdvjq7orh4iripf0/c0il0vt8gmvrikka7tk0" data-documize="true" data-link-space-id="bivc8ufjq7oqncgnk1i0" data-link-id="c0il16l8gmvrikka7urg" data-link-target-document-id="bj84du7jq7otdq3t0g70" data-link-target-id="c0il0vt8gmvrikka7tk0" data-link-type="file">wordpress_january 2021 upd.pdf</a></td>
<td style="width: 24.9536%;">WordPress / offer</td>
<td style="width: 24.9536%;">11.02.2021</td>
</tr>
<tr>
<td style="width: 25.0464%;">Digital Marketing</td>
<td style="width: 24.9536%;"><a href="/api/public/attachment/biqckdvjq7orh4iripf0/c2v3bd58gmvslgg398kg" data-documize="true" data-link-space-id="bivc8ufjq7oqncgnk1i0" data-link-id="c2v3bkt8gmvslgg399jg" data-link-target-document-id="bj84du7jq7otdq3t0g70" data-link-target-id="c2v3bd58gmvslgg398kg" data-link-type="file">digital marketing_2021.pdf</a></td>
<td style="width: 24.9536%;">Digital Marketing - onepage&nbsp;</td>
<td style="width: 24.9536%;">07.06.2021</td>
</tr>
</tbody>
</table>`
);
 

let number_of_downloadables  = await page.jQuery(`table > tbody > tr > td`).find('a').eq(4);
console.log(number_of_downloadables[0].click());

  // let element = await page.jQuery('table.wysiwyg-table:eq(2)) > tbody > tr:nth-child(2) > td').find("br").remove();
  // console.log(element);


  browser.close();
})();