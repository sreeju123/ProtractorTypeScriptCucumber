import { browser, element, by } from "protractor";
import { angularHomePage } from "./pageObjects/angularHomePage";
import { calculator } from "./pageObjects/calculator";

describe('Chain Locator Demo', function () {

    it('sample', async function () {

        //Creating Object
        let calc = new calculator();

        await browser.get('http://juliemr.github.io/protractor-demo/')
        // repeater, chain locator, and css for identical tags
        // Without PageObject

        /**await element(by.model('first')).sendKeys('2');
        await element(by.model('second')).sendKeys('5');
        await element(by.id('gobutton')).click()
        
         element(by.repeater('result in memory')).element(by.css('td:nth-child(3)')).getText().then(function(text){
            console.log(text)
        })
        
        **/

        // With PageObject
        await calc.firstEditBox.sendKeys("3");
        await calc.secondEditBox.sendKeys("6");
        await calc.go.click();

        calc.getResult.getText().then(function (text) {
            console.log(text)
        })






        // Select dropdown value
        // element(by.model('operator')).element(by.css('option:nth-child(4)')).click()



    })


    it('Angular Home page Title validation', async function () {

        let angHome = new angularHomePage();

        // Without PageObject
        /**await browser.get('https://angularjs.org/')
        await element(by.linkText('angular.io')).click();
        await element(by.css('input[type="search"]')).sendKeys("hello")**/

        // With PageObject
        await browser.get('https://angularjs.org/')
        await angHome.angularLink.click();
        await angHome.search.sendKeys("hello")

    })


})