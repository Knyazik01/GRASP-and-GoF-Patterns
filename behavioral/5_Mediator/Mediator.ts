import { Event, IMediator, IService, Services } from './types';

class Mediator implements IMediator {
  private services: Map<Services, IService> = new Map<Services, IService>();

  constructor(services: Partial<{
    [key in Services]: IService
  }> = {}) {
    Object.keys(services)
      .forEach((key: Services) => {
        this.services.set(key, services[key]);
      });
  }

  addService(type: Services, service: IService): void {
    if (this.services.has(type)) throw new Error(`Service '${type}' already exists`);

    this.services.set(type, service);
    service.setMediator(this);
  }

  inform(event: Event, payload?: object): void {
    switch (event) {
      case Event.CALL_TAXI:
        this.services.get(Services.TAXI)?.call(payload);
        break;
      case Event.CALL_HOME_MASTER:
        this.services.get(Services.HOME_MASTER)?.call(payload);
        break;
      case Event.CALL_FLOWER_DELIVERY:
        this.services.get(Services.FLOWER_DELIVERY)?.call(payload);
        break;
      default:
        break;
    }
  }
}

export default Mediator;