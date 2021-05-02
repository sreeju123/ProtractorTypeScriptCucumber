"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("@cucumber/cucumber");
const protractor_1 = require("protractor");
const calculator_1 = require("../pageObjects/calculator");
const angularHomePage_1 = require("../pageObjects/angularHomePage");
const chai_1 = __importDefault(require("chai"));
var expect = chai_1.default.expect;
let calc = new calculator_1.calculator();
let angHome = new angularHomePage_1.angularHomePage();
cucumber_1.Given('I will navigate to {string} page', function (string) {
    return __awaiter(this, void 0, void 0, function* () {
        // Write code here that turns the phrase above into concrete actions
        switch (string) {
            case "Calc":
                yield protractor_1.browser.get('http://juliemr.github.io/protractor-demo/');
                break;
            case "AngularJS":
                yield protractor_1.browser.get('https://angularjs.org/');
                break;
        }
    });
});
cucumber_1.When('I add two numbers {string} and {string}', function (string, string2) {
    return __awaiter(this, void 0, void 0, function* () {
        // Write code here that turns the phrase above into concrete actions
        yield calc.firstEditBox.sendKeys(string);
        yield calc.secondEditBox.sendKeys(string2);
    });
});
cucumber_1.Then('The output displayed should be {string}', function (string) {
    return __awaiter(this, void 0, void 0, function* () {
        // Write code here that turns the phrase above into concrete actions
        yield calc.go.click();
        yield calc.getResult.getText().then(function (text) {
            expect(text).to.equals(string);
            console.log(text);
        });
    });
});
cucumber_1.When('I clicked on Header link', function () {
    return __awaiter(this, void 0, void 0, function* () {
        // Write code here that turns the phrase above into concrete actions
        yield angHome.angularLink.click();
    });
});
cucumber_1.When('You will navigate to angular page', function () {
    return __awaiter(this, void 0, void 0, function* () {
        // Write code here that turns the phrase above into concrete actions
        console.log("Navigated to New Page");
    });
});
cucumber_1.Then('You will enter {string} in search box', function (string) {
    return __awaiter(this, void 0, void 0, function* () {
        // Write code here that turns the phrase above into concrete actions
        yield angHome.search.sendKeys(string);
        yield protractor_1.browser.sleep(2000);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zdGVwRGVmZW5pdGlvbi9zdGVwcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsaURBQXVEO0FBQ3ZELDJDQUFxQztBQUNyQywwREFBdUQ7QUFDdkQsb0VBQWlFO0FBQ2pFLGdEQUF3QjtBQUV4QixJQUFJLE1BQU0sR0FBRyxjQUFJLENBQUMsTUFBTSxDQUFDO0FBQ3pCLElBQUksSUFBSSxHQUFHLElBQUksdUJBQVUsRUFBRSxDQUFDO0FBQzVCLElBQUksT0FBTyxHQUFHLElBQUksaUNBQWUsRUFBRSxDQUFDO0FBR3BDLGdCQUFLLENBQUMsa0NBQWtDLEVBQUUsVUFBZ0IsTUFBTTs7UUFDOUQsb0VBQW9FO1FBQ3BFLFFBQVEsTUFBTSxFQUFFO1lBQ2QsS0FBSyxNQUFNO2dCQUNULE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsMkNBQTJDLENBQUMsQ0FBQTtnQkFDOUQsTUFBTTtZQUNSLEtBQUssV0FBVztnQkFDZCxNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUE7Z0JBQzNDLE1BQU07U0FDVDtJQUNILENBQUM7Q0FBQSxDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMseUNBQXlDLEVBQUUsVUFBZ0IsTUFBTSxFQUFFLE9BQU87O1FBQzdFLG9FQUFvRTtRQUVwRSxNQUFNLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3pDLE1BQU0sSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDN0MsQ0FBQztDQUFBLENBQUMsQ0FBQztBQUVILGVBQUksQ0FBQyx5Q0FBeUMsRUFBRSxVQUFnQixNQUFNOztRQUNwRSxvRUFBb0U7UUFDcEUsTUFBTSxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3RCLE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJO1lBQ2hELE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQy9CLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDbkIsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0NBQUEsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLDBCQUEwQixFQUFFOztRQUMvQixvRUFBb0U7UUFDcEUsTUFBTSxPQUFPLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3BDLENBQUM7Q0FBQSxDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMsbUNBQW1DLEVBQUU7O1FBQ3hDLG9FQUFvRTtRQUNwRSxPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLENBQUE7SUFDdEMsQ0FBQztDQUFBLENBQUMsQ0FBQztBQUVILGVBQUksQ0FBQyx1Q0FBdUMsRUFBRSxVQUFnQixNQUFNOztRQUNsRSxvRUFBb0U7UUFDcEUsTUFBTSxPQUFPLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUNyQyxNQUFNLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQzNCLENBQUM7Q0FBQSxDQUFDLENBQUMifQ==