
Feature('Basic test');

Before((I) => {
 I.amOnPage('https://www.sahibinden.com/');
});

Scenario('navigate to homepage', I => {
  
  I.seeElement('.login-text');
  I.seeElement('.register-text');
  I.seeElement('.new-classified');
  I.see('Anasayfa Vitrini');
  I.saveScreenshot('frontpageScreenshot.png');
});


Scenario('navigate To Categoty-Menu', I => {
  I.seeElement('/html/body/div[4]/div[3]/div/aside/div[1]/nav/ul[3]/li[2]/a');
  I.seeElement('/html/body/div[4]/div[3]/div/aside/div[1]/nav/ul[3]/li[2]/ul/li[1]/a');
  I.seeElement('/html/body/div[4]/div[3]/div/aside/div[1]/nav/ul[3]/li[2]/ul/li[2]/a');
  I.seeElement('/html/body/div[4]/div[3]/div/aside/div[1]/nav/ul[3]/li[2]/ul/li[3]/a');
});

