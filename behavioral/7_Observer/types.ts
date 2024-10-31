export enum WarningLevel {
  Low = 'Low',
  Medium = 'Medium',
  High = 'High',
}

export interface StormWarning {
  level: WarningLevel;
  message: string;
}

export interface Observer {
  onNotification: (notification: StormWarning) => void;
}

export interface Subject {
  subscribe(observer: Observer): void;

  unsubscribe(observer: Observer): void;

  reportWarning(notification: StormWarning): void;
}