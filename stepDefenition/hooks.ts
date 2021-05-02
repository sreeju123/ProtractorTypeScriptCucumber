 import {After, Before, Status} from "@cucumber/cucumber";
import { browser } from "protractor";

Before(function () {
  // This hook will be executed before all scenarios
});

Before({tags: "@calculatortesting"}, function () {
  // This hook will be executed before scenarios tagged with @foo
browser.manage().window().maximize();
});

// Before({tags: "@foo and @bar"}, function () {
//   // This hook will be executed before scenarios tagged with @foo and @bar
// });

// Before({tags: "@foo or @bar"}, function () {
//   // This hook will be executed before scenarios tagged with @foo or @bar
// });

// You can use the following shorthand when only specifying tags
Before("@Angulartesting", function () {
  // This hook will be executed before scenarios tagged with @foo
  console.log('Starting Angular Testing')
});

After({tags: "@calculatortesting"}, function () {
  // This hook will be executed before scenarios tagged with @foo or @bar
  console.log('Calculator Testing is completed')
});

After(async function (scenario) {
  if(scenario.result.status==Status.FAILED){
    // Take screenshot
    const screenshot = await browser.takeScreenshot();
    this.attach(screenshot,"image/png")
  }
});