/// <reference path=”./steps.d.ts”
Feature('Basic test');

Before((I) => { // or Background
 I.amOnPage('https://www.sahibinden.com/');
});


Scenario('Button click test', I => {
  I.click('/html/body/div[3]/div[1]/form/a');
  I.amOnPage('https://www.sahibinden.com/arama/detayli');
  I.seeInCurrentUrl('/detayli');
  I.seeTextEquals('Kategori','table.categorySubTable:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1) > label:nth-child(1)');
  I.seeElement('.category-list');
  I.click('.category-list > div:nth-child(1) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(3) > span:nth-child(1)');
  I.seeInCurrentUrl('/detayli?category=3517');
  I.seeElement('.jspScrollable');
  I.click('.jspScrollable > div:nth-child(1) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(4) > span:nth-child(1)');
  I.seeInCurrentUrl('detayli?category=3532');
  I.seeElement('div.category-list-wrapper:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > ul:nth-child(1)');
 
  I.click('div.category-list-wrapper:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(160) > span:nth-child(1)');
  I.seeInCurrentUrl('detayli?category=11757');
  I.seeElement('div.category-list-wrapper:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > ul:nth-child(1)');
  I.click('div.category-list-wrapper:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(53) > span:nth-child(1)');
  I.seeTextEquals('Yıl','table.categorySubTable:nth-child(5) > tbody:nth-child(1) > tr:nth-child(4) > td:nth-child(1) > label:nth-child(1)');
  I.seeElement('.numericInput');
  I.fillField('a269_min', '1998');
  I.fillField('a269_max','1999');
  
  I.seeTextEquals('Renk','table.categorySubTable:nth-child(5) > tbody:nth-child(1) > tr:nth-child(12) > td:nth-child(1) > label:nth-child(1)');
 
 I.executeScript( function() {
var color = document.getElementById('a1331_option_3');
 color.scrollIntoView();
color.click();
});

I.wait(2);


 I.executeScript( function() {
var color = document.getElementById('a106200');
 color.scrollIntoView();
color.click();

});
I.wait(3);
I.scrollPageToBottom();
I.click('Arama Yap');
I.seeElement('#saveSearchResult');
I.saveScreenshot('Renk.png');
   
});

