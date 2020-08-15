import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeopleService } from '../../../services/people/people.service';
import { Subscription } from 'rxjs';
import { IPeople } from 'src/app/pets/models';
import { map, switchMap, finalize } from 'rxjs/operators';
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
    this.$ = this.route.paramMap
      .pipe(
        finalize(() => (this.isLoading = false)),
        map((ob) => {
          const type = ob.get('type');
          this.animalType = type;
          if (!type) {
            this.menuService.openMenu();
          }
          return type;
        }),
        switchMap((ob) => {
          this.isLoading = true;
          // NOTE: could make a cache to limit requests
          return this.peopleService.getPeople();
        })
      )
      .subscribe((resp) => {
        this.data = resp;
      });
  }
}
