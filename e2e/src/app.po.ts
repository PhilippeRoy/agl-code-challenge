import {
  browser,
  by,
  element,
  ElementArrayFinder,
  ElementFinder,
} from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl + '/pets') as Promise<unknown>;
  }
  getMenu(): ElementFinder {
    return element(by.css('.menu'));
  }
  getPageTitle(): ElementFinder {
    return element(by.css('.pet-type'));
  }
  navigateToCat(): Promise<unknown> {
    return browser.get(browser.baseUrl + '/pets/cat') as Promise<unknown>;
  }
  getPetListsCount(gender: string): ElementArrayFinder {
    return element.all(
      by.css('.pet-list--' + gender + ' .pet-list__list ul li')
    );
  }
  getPetListTitle(gender: string): ElementFinder {
    return element(by.css('.pet-list--' + gender + ' .pet-list__title'));
  }
}
