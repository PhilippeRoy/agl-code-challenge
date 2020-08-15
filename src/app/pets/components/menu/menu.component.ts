import { Component, Input } from '@angular/core';
import { MenuService } from '../../services/menu/menu.service';
import { Animal } from '../../enums/animals.enum';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  @Input() disable: boolean;
  animalType: typeof Animal = Animal;

  constructor(private menuService: MenuService) {}

  openMenu(): void {
    this.menuService.openMenu();
  }
  closeMenu(): void {
    this.menuService.closeMenu();
  }
}
