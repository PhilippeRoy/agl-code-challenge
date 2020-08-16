import { AppPage } from './app.po';
import { browser, logging, by } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display menu when no animal type is in route', () => {
    page.navigateTo();
    expect(page.getMenu().getAttribute('class')).toContain(
      'menu animate__animated animate__fadeIn'
    );
  });

  it('should navigate to "/pets/cats" hide menu and load page with title "Cat"', () => {
    page.navigateTo();
    page.getMenu().element(by.css('a[href="/pets/cat"')).click(); // TODO: can be better use data-test-id instead
    expect(page.getMenu().getAttribute('class')).toContain(
      'menu animate__animated animate__fadeOut'
    );
    expect(page.getPageTitle().getText()).toEqual('CAT');
  });

  it('should have pet list with title "female" with three list of items', () => {
    page.navigateToCat();
    expect(page.getPetListsCount('female').count()).toEqual(3);
    expect(page.getPetListTitle('female').getText()).toEqual('Female');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(
      jasmine.objectContaining({
        level: logging.Level.SEVERE,
      } as logging.Entry)
    );
  });
});
