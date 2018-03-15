
//this is a page object page (app.po.ts)
//this is so that you can get a specific buttuon so y0ou can have it as a page object
import { browser, by, element } from 'protractor';

export class AppPage {
  //when you call navigateTo(), it'll go to the .get('/') route (AKA the mainpage.)
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
  
  //gets the "home" clickable link
  getHomeButton(){
    return element(by.css('[routerlink="home"]'));
  }

  getPortalButton(){
    return element(by.css('[routerlink="portal"]'));
  }

  //should get the "Here you can find the sweetest babiers and sitters!" text.
  getPortalText(){

    return element(by.css('app-portal h2')).getText();
  }

  getFindABabyLink(){

    return element(by.css('[routerlink="findBaby"]'));
  }

  //THIS ONE PROBABLY DOESNT WORK
  getLoginForm(){
    return element(by.css('[formcontrolname="username"]'));
  }
}
