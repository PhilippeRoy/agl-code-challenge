import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeopleService } from '../../../services/people/people.service';
import { Subscription } from 'rxjs';
import { IPeople } from 'src/app/pets/models';
import { map, switchMap } from 'rxjs/operators';
import { Gender } from 'src/app/pets/enums';
import { MenuService } from 'src/app/pets/services/menu/menu.service';

@Component({
  selector: 'app-pets-page',
  templateUrl: './pets-page.component.html',
  styleUrls: ['./pets-page.component.scss'],
})
export class PetsPageComponent implements OnInit, OnDestroy {
  animalType: string;
  data: IPeople[];
  genderType: typeof Gender = Gender;
  isLoading: boolean;
  $: Subscription;

  constructor(
    private route: ActivatedRoute,
    private peopleService: PeopleService,
    private menuService: MenuService
  ) {}

  ngOnDestroy(): void {
    this.$.unsubscribe();
  }

  ngOnInit(): void {
    // capture the animal type form the route paramter
    // fetch new list every time route changes
    this.$ = this.route.paramMap
      .pipe(
        map((param) => {
          const type = param.get('type');
          this.animalType = type;
          if (!type) {
            // Force open menu when no animal type is provided
            this.menuService.openMenu();
          }
          return type;
        }),
        switchMap(() => {
          this.isLoading = true;
          // NOTE: could make a cache to limit requests
          return this.peopleService.getPeople();
        })
      )
      .subscribe((resp) => {
        this.data = resp;
        this.isLoading = false;
      });
  }

  openMenu(): void {
    this.menuService.openMenu();
  }
}
