import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IPeople } from '../../models/people.model';
import { environment } from 'src/environments/environment';
import { ErrorHandlerService } from '../../../shared/services/errors/error-handler.service';

/**
 *
 * Service to fetch People records
 *
 */
@Injectable({
  providedIn: 'root',
})
export class PeopleService {
  constructor(
    private httpClient: HttpClient,
    private errorHandlerService: ErrorHandlerService
  ) {}

  /**
   * Get list of People
   */
  getPeople(): Observable<IPeople[]> {
    return this.httpClient
      .get<IPeople[]>(`${environment.api}/people.json`)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          console.error(error);
          return this.errorHandlerService.handleError(error);
        })
      );
  }
}
