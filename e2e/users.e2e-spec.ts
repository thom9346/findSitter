 import { browser, by, element } from 'protractor';

 //test user-list without being logged in
describe('Test if you can see user list without being logged in as admin', () =>{
    it('Should return me to login page', async() => {
        browser.get("/portal/users");
        expect(browser.get("/home/login"));
    });
});

//test user-list logged in as admin
describe('test user list when admin', () =>{
    it('Should return the user list', async()=> {
        browser.get("/home/login");

        element(by.id("e2e-username")).sendKeys("admin");
        element(by.id("e2e-password")).sendKeys("admin");
        element(by.id("e2e-button")).click();

    })
});

// describe('Babies test', () => {
//     it('Should create a new baby when form is valid', async() => {
//         //Check first: How many babies are there?
//         //Then create new baby
//         //now check how many babies
//         //Assert one more baby

// //THIS NEEDS TO BE WRITTEN CORRECTLY. CHECK TEACHERS GITHUBU
//         browser.get("/portal/users");
//         element.all(by.css("{CLASSNAME]")).then(function(elmentsBefore) {
//             const numBabiesBeofre = elmentsBefore.length;
//             element(by.id(""))
//         });
//     })
// })