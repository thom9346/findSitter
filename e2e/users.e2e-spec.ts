import { element, browser } from "protractor";

describe("Page: /home/register", function() {
    it("1: This test will create a new user", function() {
        browser.get('http://localhost:4200/home/register');
       
    })
})