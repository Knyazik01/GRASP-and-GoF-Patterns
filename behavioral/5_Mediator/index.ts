import Mediator from './Mediator';
import { FlowerDeliveryService, HomeMasterService, TaxiService } from './Services';
import { Event, Services } from './types';

// create taxi service without mediator
const taxiService = new TaxiService();
// create mediator with taxi service
const conciergeServiceMediator = new Mediator({ [Services.TAXI]: taxiService });

// create homeMaster service with preset mediator
const homeMasterService = new HomeMasterService(conciergeServiceMediator);

// create homeMaster service without mediator
const flowerDeliveryService = new FlowerDeliveryService();
// add service into mediator
conciergeServiceMediator.addService(Services.FLOWER_DELIVERY, flowerDeliveryService);

// running code
conciergeServiceMediator.inform(Event.CALL_TAXI);
conciergeServiceMediator.inform(Event.CALL_HOME_MASTER);
conciergeServiceMediator.inform(Event.CALL_FLOWER_DELIVERY);

console.info('------------------------');

conciergeServiceMediator.inform(Event.CALL_TAXI, { price: 100 });
conciergeServiceMediator.inform(Event.CALL_HOME_MASTER, { hours: 2 });
conciergeServiceMediator.inform(Event.CALL_FLOWER_DELIVERY, { address: 'Kyiv, Ukraine' });

console.info('------------------------');

conciergeServiceMediator.inform('INVALID' as Event); // nothing happened