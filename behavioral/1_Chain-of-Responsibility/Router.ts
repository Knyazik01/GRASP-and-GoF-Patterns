import { Emergency, EmergencySituation } from './types';
import { Firefighters, MedicalAssistance, Police } from './Emergency';

class EmergencyRouter {
  private readonly emergencyServices: Emergency[];

  constructor() {
    this.emergencyServices = [
      new Firefighters(),
      new Police(),
      new MedicalAssistance(),
    ];
  }

  callEmergency(situation: EmergencySituation) {
    for (const emergency of this.emergencyServices) {
      const result = emergency.call(situation);

      // return result if handled to brake callstack
      if (result) return result;
    }

    // throw error if none handle has been worked
    throw new Error(`Situation '${situation}' has not been handled`);
  }
}

export default EmergencyRouter;