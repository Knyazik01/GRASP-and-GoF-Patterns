export enum Services {
  TAXI = 'TAXI',
  HOME_MASTER = 'HOME_MASTER',
  FLOWER_DELIVERY = 'FLOWER_DELIVERY',
}

export enum Event {
  CALL_TAXI = 'CALL_TAXI',
  CALL_HOME_MASTER = 'CALL_HOME_MASTER',
  CALL_FLOWER_DELIVERY = 'CALL_FLOWER_DELIVERY',
}

export interface IMediator {
  addService(type: Services, service: IService): void;
  inform(event: Event): void;
}

export interface IService {
  setMediator(mediator: IMediator): void;
  call(payload?: object): void;
}