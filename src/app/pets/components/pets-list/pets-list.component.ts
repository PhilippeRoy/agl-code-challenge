import {
  Component,
  Input,
  ChangeDetectionStrategy,
  OnChanges,
} from '@angular/core';
import { IPeople, IPet } from '../../models';
import { Gender, Animal } from '../../enums';

@Component({
  selector: 'app-pets-list',
  templateUrl: './pets-list.component.html',
  styleUrls: ['./pets-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PetsListComponent implements OnChanges {
  @Input() genderType: Gender;
  @Input() animalType: Animal;
  @Input() data: IPeople[];

  pets: IPet[];

  constructor() {}
  ngOnChanges(): void {
    this.pets = this.filterPets(this.data, this.genderType, this.animalType);
  }

  filterPets(data: IPeople[], genderType: Gender, animalType: Animal): IPet[] {
    return data
      ?.filter(
        (person) => person.gender?.toLowerCase() === genderType.toLowerCase()
      )
      .map((person) => (person.pets ? person.pets : []))
      .reduce((pre, cur) => pre.concat(cur))
      .filter((pet) => pet.type?.toLowerCase() === animalType?.toLowerCase())
      .sort((a, b) => a.name.localeCompare(b.name));
  }
}
