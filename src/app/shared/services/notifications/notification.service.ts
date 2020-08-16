import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Notification } from '../../models';
import { NotificationType } from '../../enums/index';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  newNotification: number;
  notifications: Array<Notification>;

  constructor(private toastrService: ToastrService) {
    this.newNotification = 0;
    this.notifications = new Array<Notification>();
  }

  get(): Array<Notification> {
    return this.notifications.reverse();
  }

  getByIndex(index: number): Notification {
    return this.notifications[index];
  }

  /** add notification to list and display with toast message */
  add(notification: Notification): void {
    notification.isRead = false;
    this.notifications.unshift(notification);
    this.display(notification);
  }

  display(notification: Notification): void {
    switch (notification.type) {
      case NotificationType.SUCCESS:
        this.toastrService.success(notification.message, notification.title);
        break;
      case NotificationType.WARNING:
        this.toastrService.warning(notification.message, notification.title);
        break;
      case NotificationType.FAIL:
        this.toastrService.error(notification.message, notification.title);
        break;
      case NotificationType.INFO:
        this.toastrService.info(notification.message, notification.title);
        break;
      default:
        this.toastrService.info(notification.message, notification.title);
        break;
    }
  }

  removeByIndex(index: number): void {
    this.notifications.splice(index, 1);
  }

  setNotificationsAsRead(): void {
    for (const notification of this.notifications) {
      notification.isRead = true;
    }
  }

  getUnreadNotifications(): number {
    for (const notification of this.notifications) {
      if (!notification.isRead) {
        this.newNotification++;
      }
    }
    return this.newNotification;
  }
}
