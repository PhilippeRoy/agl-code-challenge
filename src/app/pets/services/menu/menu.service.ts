import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  menuState: BehaviorSubject<boolean> = new BehaviorSubject(false);
  constructor() {}

  openMenu(): void {
    this.menuState.next(true);
  }
  closeMenu(): void {
    this.menuState.next(false);
  }
}
