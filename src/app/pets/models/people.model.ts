import { Gender } from '../enums/gender.enum';
import { IPet } from './pet.model';

export interface IPeople {
  name: string;
  gender: Gender;
  age: number;
  pets: IPet[];
}
