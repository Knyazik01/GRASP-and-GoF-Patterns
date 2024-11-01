import Service from './Service';
import { WarningLevel } from './types';
import { Airport, RoadService, School } from './Observers';

const stormService = new Service();

const school = new School();
const airport = new Airport();
const roadService = new RoadService();

stormService.subscribe(school);
stormService.subscribe(airport);
stormService.subscribe(roadService);

console.info('----------------------------');
stormService.reportWarning({ level: WarningLevel.High, message: 'Severe storm approaching! Evacuate immediately!' });
console.info('----------------------------');
stormService.reportWarning({ level: WarningLevel.Medium, message: 'Strong winds expected. Secure loose items.' });
console.info('----------------------------');
stormService.reportWarning({ level: WarningLevel.Low, message: 'Possible rain later today. Stay alert.' });

console.info('----------------------------');
console.info('----------------------------');

stormService.unsubscribe(airport);
stormService.reportWarning({ level: WarningLevel.High, message: 'Severe storm approaching! Evacuate immediately!' });
console.info('----------------------------');
stormService.reportWarning({ level: WarningLevel.Low, message: 'Possible rain later today. Stay alert.' });
console.info('----------------------------');
