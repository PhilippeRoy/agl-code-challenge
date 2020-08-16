import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { MenuService } from '../../services/menu/menu.service';
import { Animal } from '../../enums/animals.enum';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit, OnDestroy {
  @Input() disable: boolean;
  animalType: typeof Animal = Animal;
  $: Subscription;
  menuState: boolean;

  constructor(private menuService: MenuService) {}

  ngOnInit(): void {
    this.$ = this.menuService.menuState.subscribe(
      (state) => (this.menuState = state)
    );
  }

  ngOnDestroy(): void {
    this.$.unsubscribe();
  }

  openMenu(): void {
    this.menuService.openMenu();
  }
  closeMenu(): void {
    this.menuService.closeMenu();
  }
}
