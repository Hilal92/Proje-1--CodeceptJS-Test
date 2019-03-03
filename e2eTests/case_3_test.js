
Feature('Basic test');
var assert = require('assert');


Before((I,loginPage) => { // or Background
 I.amOnPage('https://www.sahibinden.com/');
  loginPage.sendForm('ecehilalyigit@gmail.com','esmeralda1789');

});


  
  let accounts = new DataTable(['searchText']); //
//accounts.add(['Yamaha MT07']); // adding records to a table
accounts.add(['Yamaha MT09']);
accounts.add(['Yamaha MT25']);



// Pass dataTable to Data()
// Use special param `current` to get current data set
Data(accounts).Scenario('Test Search', async (I, current) => {  
	I.refreshPage();
  I.amOnPage('https://www.sahibinden.com/');
  I.fillField('query_text', current.searchText); // current is reserved!
  I.click('#searchSuggestionForm > button:nth-child(4)');
  I.wait(3);
  
  let size = await I.grabTextFrom('.result-text > span:nth-child(3)');
  I.seeTextEquals(size,'/html/body/div[4]/div[4]/form/div/div[3]/div[1]/div[1]/div[1]/div[1]/span');
  //assert.equal('.result-text > span:nth-child(3)',size);

 I.wait(3);
I.saveScreenshot('searchText.png');

});

Scenario('Text Search For Yamaha MT07', async I => {
  I.amOnPage('https://www.sahibinden.com/');
 I.fillField('query_text', 'Yamaha MT07'); 
 I.click('#searchSuggestionForm > button:nth-child(4)');
 I.wait(1);
  I.click('.category-level-3517 > ul:nth-child(3) > li:nth-child(1) > a:nth-child(1)');
  I.wait(3);
let size = await I.grabTextFrom('.result-text > span:nth-child(3)');
I.seeTextEquals(size,'/html/body/div[4]/div[4]/form/div/div[3]/div[1]/div[1]/div[1]/div[1]/span');

I.saveScreenshot('searchTextForYamahaMT07.png');

});




