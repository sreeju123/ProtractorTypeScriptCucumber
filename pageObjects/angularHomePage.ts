import { element, ElementFinder, by } from "protractor";

export class angularHomePage {

    // Another POM Format
    angularLink: ElementFinder;
    search: ElementFinder;


    constructor() {

        this.angularLink = element(by.linkText('angular.io'));
        this.search = element(by.css('input[type="search"]'));

    }


    // One Format
    // angularLink = element(by.linkText('angular.io'));
    // search = element(by.css('input[type="search"]'));
}