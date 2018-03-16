import { AppPage } from './app.po';
import { browser, by, element } from 'protractor';


describe('findasittercs App', () => {
  let page: AppPage;

  //before it runs each test it has to initialise the apppage object (AKA THE app.po.ts object)
  beforeEach(() => {
    page = new AppPage();
  });

  it('should display the Find a Sitter title. ', () => {
    page.navigateTo(); //navigaters to default route.
    //browser.pause(49152); //when it runs a test; at this line it'd pause
    expect(page.getParagraphText()).toEqual('Welcome to Find a Sitter');
   
  });

  //this checks if the "Home" clickable link is even there
  it('should check if home clickable link exsists', () => {
    page.navigateTo();
    expect(page.getHomeButton().getText()).toEqual('Home');
  })

  //navigates to portal
  it('should route to portal page', () => {
    page.navigateTo();
    page.getPortalButton().click();
    expect(page.getPortalText()).toEqual('Here you can find the sweetest babies and sitters!');
    
  });

  // //THIS ONE DOESNT WORK LIKE ITS SUPPOSED TO
  // it('should click find a baby to babysit'), () => {
  //   page.getFindABabyLink().click();
  //   expect(page.getLoginForm()).toEqual('username')

  // };

  it('should route to home page', () => {
    page.navigateTo(); //go to default route
    page.getHomeButton().click(); //clicks on the home page
    expect(page.getHomeButton().getText()).toEqual('Home'); //still on the same page.. so same expected result
  })


});