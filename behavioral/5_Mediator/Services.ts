import { IMediator, IService, Services } from './types';

abstract class BaseService implements IService {
  protected mediator: IMediator;
  protected type: Services;

  protected constructor(type: Services, mediator?: IMediator) {
    this.type = type;
    this.mediator = mediator;

    if (this.mediator) {
      this.mediator.addService(this.type, this);
    }
  }

  public setMediator(mediator: IMediator): void {
    this.mediator = mediator;
  }

  abstract call(payload?: object): void;
}

export class TaxiService extends BaseService {
  constructor(mediator?: IMediator) {
    super(Services.TAXI, mediator);
  }

  call(payload?: object): void {
    console.info('Taxi service called.');
    (payload !== null && payload !== undefined) && console.info(`Payload: ${JSON.stringify(payload, null, 2)}`);
  }
}

export class HomeMasterService extends BaseService {
  constructor(mediator?: IMediator) {
    super(Services.HOME_MASTER, mediator);
  }

  call(payload?: object): void {
    console.info('Home master service called.');
    (payload !== null && payload !== undefined) && console.info(`Payload: ${JSON.stringify(payload, null, 2)}`);
  }
}

export class FlowerDeliveryService extends BaseService {
  constructor(mediator?: IMediator) {
    super(Services.FLOWER_DELIVERY, mediator);
  }

  call(payload?: object): void {
    console.info('Flower delivery service called.');
    (payload !== null && payload !== undefined) && console.info(`Payload: ${JSON.stringify(payload, null, 2)}`);
  }
}