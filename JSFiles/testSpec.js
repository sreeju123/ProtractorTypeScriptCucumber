"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const angularHomePage_1 = require("./pageObjects/angularHomePage");
const calculator_1 = require("./pageObjects/calculator");
describe('Chain Locator Demo', function () {
    it('sample', function () {
        return __awaiter(this, void 0, void 0, function* () {
            //Creating Object
            let calc = new calculator_1.calculator();
            yield protractor_1.browser.get('http://juliemr.github.io/protractor-demo/');
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
            yield calc.firstEditBox.sendKeys("3");
            yield calc.secondEditBox.sendKeys("6");
            yield calc.go.click();
            calc.getResult.getText().then(function (text) {
                console.log(text);
            });
            // Select dropdown value
            // element(by.model('operator')).element(by.css('option:nth-child(4)')).click()
        });
    });
    it('Angular Home page Title validation', function () {
        return __awaiter(this, void 0, void 0, function* () {
            let angHome = new angularHomePage_1.angularHomePage();
            // Without PageObject
            /**await browser.get('https://angularjs.org/')
            await element(by.linkText('angular.io')).click();
            await element(by.css('input[type="search"]')).sendKeys("hello")**/
            // With PageObject
            yield protractor_1.browser.get('https://angularjs.org/');
            yield angHome.angularLink.click();
            yield angHome.search.sendKeys("hello");
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdFNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90ZXN0U3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsMkNBQWtEO0FBQ2xELG1FQUFnRTtBQUNoRSx5REFBc0Q7QUFFdEQsUUFBUSxDQUFDLG9CQUFvQixFQUFFO0lBRTNCLEVBQUUsQ0FBQyxRQUFRLEVBQUU7O1lBRVQsaUJBQWlCO1lBQ2pCLElBQUksSUFBSSxHQUFHLElBQUksdUJBQVUsRUFBRSxDQUFDO1lBRTVCLE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsMkNBQTJDLENBQUMsQ0FBQTtZQUM5RCxzREFBc0Q7WUFDdEQscUJBQXFCO1lBRXJCOzs7Ozs7OztlQVFHO1lBRUgsa0JBQWtCO1lBQ2xCLE1BQU0sSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDdEMsTUFBTSxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN2QyxNQUFNLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUM7WUFFdEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJO2dCQUN4QyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFBO1lBQ3JCLENBQUMsQ0FBQyxDQUFBO1lBT0Ysd0JBQXdCO1lBQ3hCLCtFQUErRTtRQUluRixDQUFDO0tBQUEsQ0FBQyxDQUFBO0lBR0YsRUFBRSxDQUFDLG9DQUFvQyxFQUFFOztZQUVyQyxJQUFJLE9BQU8sR0FBRyxJQUFJLGlDQUFlLEVBQUUsQ0FBQztZQUVwQyxxQkFBcUI7WUFDckI7OzhFQUVrRTtZQUVsRSxrQkFBa0I7WUFDbEIsTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFBO1lBQzNDLE1BQU0sT0FBTyxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNsQyxNQUFNLE9BQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFBO1FBRTFDLENBQUM7S0FBQSxDQUFDLENBQUE7QUFHTixDQUFDLENBQUMsQ0FBQSJ9