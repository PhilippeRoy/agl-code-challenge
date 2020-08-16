import { TestBed, async, inject } from '@angular/core/testing';
import { MenuService } from './menu.service';

describe('Service: Menu', () => {
  let menuService: MenuService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MenuService],
    });
  });

  beforeEach(() => {
    menuService = TestBed.inject(MenuService);
  });

  describe('openMenu', () => {
    it('should set menuState to true ', (done) => {
      // Act
      const sut = menuService.menuState;
      menuService.openMenu();

      // Assert
      sut.subscribe((result) => {
        expect(result).toEqual(true);
        done();
      });
    });
  });

  describe('openMenu', () => {
    it('should set menuState to true ', (done) => {
      // Act
      const sut = menuService.menuState;
      menuService.closeMenu();

      // Assert
      sut.subscribe((result) => {
        expect(result).toEqual(false);
        done();
      });
    });
  });
});
