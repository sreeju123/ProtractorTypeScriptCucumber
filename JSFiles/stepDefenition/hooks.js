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
const cucumber_1 = require("@cucumber/cucumber");
const protractor_1 = require("protractor");
cucumber_1.Before(function () {
    // This hook will be executed before all scenarios
});
cucumber_1.Before({ tags: "@calculatortesting" }, function () {
    // This hook will be executed before scenarios tagged with @foo
    protractor_1.browser.manage().window().maximize();
});
// Before({tags: "@foo and @bar"}, function () {
//   // This hook will be executed before scenarios tagged with @foo and @bar
// });
// Before({tags: "@foo or @bar"}, function () {
//   // This hook will be executed before scenarios tagged with @foo or @bar
// });
// You can use the following shorthand when only specifying tags
cucumber_1.Before("@Angulartesting", function () {
    // This hook will be executed before scenarios tagged with @foo
    console.log('Starting Angular Testing');
});
cucumber_1.After({ tags: "@calculatortesting" }, function () {
    // This hook will be executed before scenarios tagged with @foo or @bar
    console.log('Calculator Testing is completed');
});
cucumber_1.After(function (scenario) {
    return __awaiter(this, void 0, void 0, function* () {
        if (scenario.result.status == cucumber_1.Status.FAILED) {
            // Take screenshot
            const screenshot = yield protractor_1.browser.takeScreenshot();
            this.attach(screenshot, "image/png");
        }
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9va3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zdGVwRGVmZW5pdGlvbi9ob29rcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUMsaURBQXlEO0FBQzFELDJDQUFxQztBQUVyQyxpQkFBTSxDQUFDO0lBQ0wsa0RBQWtEO0FBQ3BELENBQUMsQ0FBQyxDQUFDO0FBRUgsaUJBQU0sQ0FBQyxFQUFDLElBQUksRUFBRSxvQkFBb0IsRUFBQyxFQUFFO0lBQ25DLCtEQUErRDtJQUNqRSxvQkFBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO0FBQ3JDLENBQUMsQ0FBQyxDQUFDO0FBRUgsZ0RBQWdEO0FBQ2hELDZFQUE2RTtBQUM3RSxNQUFNO0FBRU4sK0NBQStDO0FBQy9DLDRFQUE0RTtBQUM1RSxNQUFNO0FBRU4sZ0VBQWdFO0FBQ2hFLGlCQUFNLENBQUMsaUJBQWlCLEVBQUU7SUFDeEIsK0RBQStEO0lBQy9ELE9BQU8sQ0FBQyxHQUFHLENBQUMsMEJBQTBCLENBQUMsQ0FBQTtBQUN6QyxDQUFDLENBQUMsQ0FBQztBQUVILGdCQUFLLENBQUMsRUFBQyxJQUFJLEVBQUUsb0JBQW9CLEVBQUMsRUFBRTtJQUNsQyx1RUFBdUU7SUFDdkUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFBO0FBQ2hELENBQUMsQ0FBQyxDQUFDO0FBRUgsZ0JBQUssQ0FBQyxVQUFnQixRQUFROztRQUM1QixJQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxJQUFFLGlCQUFNLENBQUMsTUFBTSxFQUFDO1lBQ3ZDLGtCQUFrQjtZQUNsQixNQUFNLFVBQVUsR0FBRyxNQUFNLG9CQUFPLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDbEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUMsV0FBVyxDQUFDLENBQUE7U0FDcEM7SUFDSCxDQUFDO0NBQUEsQ0FBQyxDQUFDIn0=