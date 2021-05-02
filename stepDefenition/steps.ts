import { Given, When, Then } from "@cucumber/cucumber";
import { browser } from "protractor";
import { calculator } from "../pageObjects/calculator";
import { angularHomePage } from "../pageObjects/angularHomePage";
import chai from "chai";

var expect = chai.expect;
let calc = new calculator();
let angHome = new angularHomePage();


Given('I will navigate to {string} page', async function (string) {
  // Write code here that turns the phrase above into concrete actions
  switch (string) {
    case "Calc":
      await browser.get('http://juliemr.github.io/protractor-demo/')
      break;
    case "AngularJS":
      await browser.get('https://angularjs.org/')
      break;
  } 
});

When('I add two numbers {string} and {string}', async function (string, string2) {
  // Write code here that turns the phrase above into concrete actions

  await calc.firstEditBox.sendKeys(string);
  await calc.secondEditBox.sendKeys(string2);
});

Then('The output displayed should be {string}', async function (string) {
  // Write code here that turns the phrase above into concrete actions
  await calc.go.click();
  await calc.getResult.getText().then(function (text) {
    expect(text).to.equals(string);
    console.log(text)
  })
});

When('I clicked on Header link', async function () {
  // Write code here that turns the phrase above into concrete actions
  await angHome.angularLink.click();
});

When('You will navigate to angular page', async function () {
  // Write code here that turns the phrase above into concrete actions
  console.log("Navigated to New Page")
});

Then('You will enter {string} in search box', async function (string) {
  // Write code here that turns the phrase above into concrete actions
  await angHome.search.sendKeys(string)
  await browser.sleep(2000)
});

