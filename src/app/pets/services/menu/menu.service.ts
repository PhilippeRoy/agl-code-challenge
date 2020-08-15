import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  menuState: BehaviorSubject<boolean> = new BehaviorSubject(false);
  constructor() {}

  openMenu(): void {
    console.log('open Menu');
    this.menuState.next(true);
  }
  closeMenu(): void {
    console.log('close Menu');

    this.menuState.next(false);
  }
}
