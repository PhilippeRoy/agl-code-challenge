import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  private _menuState: BehaviorSubject<boolean> = new BehaviorSubject(false);
  constructor() {}

  get menuState(): Observable<boolean> {
    return this._menuState.asObservable();
  }
  openMenu(): void {
    this._menuState.next(true);
  }
  closeMenu(): void {
    this._menuState.next(false);
  }
}
