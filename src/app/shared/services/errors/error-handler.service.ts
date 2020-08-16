import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { NotificationService } from '../notifications/notification.service';
import { NotificationType } from '../../enums';

@Injectable({
  providedIn: 'root',
})
export class ErrorHandlerService {
  constructor(private notificationService: NotificationService) {}

  public handleError(error: any, message?: string): Observable<any> {
    if (
      error instanceof HttpErrorResponse ||
      error?.name === 'HttpErrorResponse'
    ) {
      if (error.status === 500) {
        this.notificationService.display({
          title: 'Error',
          message: message || 'Service down, please try again later',
          type: NotificationType.FAIL,
          isRead: false,
        });
      }

      if (error.status === 400) {
        this.notificationService.display({
          title: 'Error',
          message: message || 'Bad Request',
          type: NotificationType.FAIL,
          isRead: false,
        });
      }

      if (error.status === 403) {
        this.notificationService.display({
          title: 'Error',
          message: message || 'Forbidden',
          type: NotificationType.FAIL,
          isRead: false,
        });
      }

      if (error.status === 404) {
        this.notificationService.display({
          title: 'Error',
          message: message || 'Resource not found',
          type: NotificationType.FAIL,
          isRead: false,
        });
      }
    } else {
      this.notificationService.display({
        title: 'Error',
        message: message || 'An error has occurred',
        type: NotificationType.FAIL,
        isRead: false,
      });
    }

    return throwError(error);
  }
}
