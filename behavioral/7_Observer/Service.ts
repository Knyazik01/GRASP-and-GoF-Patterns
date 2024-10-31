import { Observer, StormWarning, Subject } from './types';

class StormService implements Subject {
  private observers: Observer[] = [];

  subscribe(observer: Observer): void {
    this.observers.push(observer);
  }

  unsubscribe(observer: Observer): void {
    this.observers = this.observers.filter((curObserver) => curObserver !== observer);
  }

  reportWarning(notification: StormWarning): void {
    // notify observers
    this.observers.forEach(observer => observer.onNotification(notification));
  }
}

export default StormService;