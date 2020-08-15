import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { IPeople } from '../../models/people.model';
import { environment } from 'src/environments/environment';

const mockData: any = [
  {
    name: 'Bob',
    gender: 'Male',
    age: 23,
    pets: [
      { name: 'Garfield', type: 'Cat' },
      { name: 'Fido', type: 'Dog' },
    ],
  },
  {
    name: 'Jennifer',
    gender: 'Female',
    age: 18,
    pets: [{ name: 'Garfield', type: 'Cat' }],
  },
  { name: 'Steve', gender: 'Male', age: 45, pets: null },
  {
    name: 'Fred',
    gender: 'Male',
    age: 40,
    pets: [
      { name: 'Tom', type: 'Cat' },
      { name: 'Max', type: 'Cat' },
      { name: 'Sam', type: 'Dog' },
      { name: 'Jim', type: 'Cat' },
    ],
  },
  {
    name: 'Samantha',
    gender: 'Female',
    age: 40,
    pets: [{ name: 'Tabby', type: 'Cat' }],
  },
  {
    name: 'Alice',
    gender: 'Female',
    age: 64,
    pets: [
      { name: 'Simba', type: 'Cat' },
      { name: 'Nemo', type: 'Fish' },
    ],
  },
];

@Injectable({
  providedIn: 'root',
})
export class PeopleService {
  constructor(private httpClient: HttpClient) {}

  // TODO: make envi api
  getPeople(): Observable<IPeople[]> {
    //return of(mockData);

    return this.httpClient.get<IPeople[]>(`${environment.api}/people.json`);
    // .pipe(
    //   catchError((error: HttpErrorResponse) => {
    //     console.log(error);
    //     return this.errorHandlerService.handleError(error);
    //   })
    // );
  }
}
