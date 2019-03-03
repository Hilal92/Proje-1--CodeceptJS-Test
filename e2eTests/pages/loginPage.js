
 
let I;
 
module.exports = {
 
  _init() {
    I = actor();
  },
 
  fields: {
    email: 'username',
    password: 'password'
  },

 
  sendForm(email, password) {
	 I.click('.login-text');
	 I.amOnPage('https://secure.sahibinden.com/giris');
	 I.clearField(this.fields.email);
	 I.clearField(this.fields.password);
    I.fillField(this.fields.email, email);
    I.fillField(this.fields.password, password);
    I.click('//*[@id="userLoginSubmitButton"]');
   I.wait(1);
    I.amOnPage('https://www.sahibinden.com/');
	I.saveScreenshot('Login.png');
  }
}
