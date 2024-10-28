import { EmergencySituation } from './types';
import EmergencyRouter from './Router';

const router = new EmergencyRouter();

console.info(router.callEmergency(EmergencySituation.Fire)); // extinguisher
console.info(router.callEmergency(EmergencySituation.TrafficViolation)); // protocol
console.info(router.callEmergency(EmergencySituation.HighTemperature)); // ibuprofen

// Test invalid situation
try {
  console.info(router.callEmergency('test' as EmergencySituation));
} catch (e) {
  console.info(e.message); // Situation 'test' has not been handled
}
