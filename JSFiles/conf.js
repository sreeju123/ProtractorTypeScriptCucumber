"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// An example configuration file
exports.config = {
    // The address of a running selenium server.
    // seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: true,
    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        browserName: 'chrome'
    },
    // Spec patterns are relative to the configuration file location passed
    // to protractor (in this example conf.js).
    // They may include glob patterns.
    specs: ['testSpec.js'],
    // Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
        showColors: true,
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvbmYudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSxnQ0FBZ0M7QUFDckIsUUFBQSxNQUFNLEdBQVc7SUFFMUIsNENBQTRDO0lBQzVDLG1EQUFtRDtJQUNuRCxhQUFhLEVBQUUsSUFBSTtJQUVuQix1REFBdUQ7SUFDdkQsWUFBWSxFQUFFO1FBQ1osV0FBVyxFQUFFLFFBQVE7S0FDdEI7SUFFRCx1RUFBdUU7SUFDdkUsMkNBQTJDO0lBQzNDLGtDQUFrQztJQUNsQyxLQUFLLEVBQUUsQ0FBQyxhQUFhLENBQUM7SUFFdEIsd0NBQXdDO0lBQ3hDLGVBQWUsRUFBRTtRQUNmLFVBQVUsRUFBRSxJQUFJO0tBQ2pCO0NBQ0YsQ0FBQyJ9