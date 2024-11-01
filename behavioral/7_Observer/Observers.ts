import { Observer, StormWarning, WarningLevel } from './types';

export class School implements Observer {
  private levels: WarningLevel[] = [WarningLevel.Medium, WarningLevel.High];

  onNotification(notification: StormWarning): void {
    const shouldHandleNotification = this.levels.find(level => level === notification.level);
    if (shouldHandleNotification) {
      console.info(`School Service received *${notification.level}* warning:\n${notification.message}`);
    }
  }
}

export class Airport implements Observer {
  private levels: WarningLevel[] = [WarningLevel.Low, WarningLevel.Medium, WarningLevel.High];

  onNotification(notification: StormWarning): void {
    const shouldHandleNotification = this.levels.find(level => level === notification.level);
    if (shouldHandleNotification) {
      console.info(`Airport received *${notification.level}* warning:\n${notification.message}`);
    }
  }
}

export class RoadService implements Observer {
  private levels: WarningLevel[] = [WarningLevel.High];

  onNotification(notification: StormWarning): void {
    const shouldHandleNotification = this.levels.find(level => level === notification.level);
    if (shouldHandleNotification) {
      console.info(`Road Service received *${notification.level}* warning:\n${notification.message}`);
    }
  }
}