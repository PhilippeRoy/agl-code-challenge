import { NotificationType } from '../enums';

class Notification {
  title: string;
  message: string;
  type: NotificationType;
  isRead: boolean;

  constructor(title?: string, message?: string, isRead = false) {
    this.title = title;
    this.message = message;
    this.isRead = isRead;
    this.type = NotificationType.INFO;
  }
}

class SuccessNotification extends Notification {
  constructor(title?: string, message?: string, isRead = false) {
    super(title, message, isRead);
    this.type = NotificationType.SUCCESS;
  }
}

class WarningNotification extends Notification {
  constructor(title?: string, message?: string, isRead = false) {
    super(title, message, isRead);
    this.type = NotificationType.WARNING;
  }
}

class FailedNotification extends Notification {
  constructor(title?: string, message?: string, isRead = false) {
    super(title, message, isRead);
    this.type = NotificationType.FAIL;
  }
}

class InfoNotification extends Notification {
  constructor(title?: string, message?: string, isRead = false) {
    super(title, message, isRead);
    this.type = NotificationType.INFO;
  }
}

export {
  Notification,
  SuccessNotification,
  WarningNotification,
  FailedNotification,
  InfoNotification,
};
