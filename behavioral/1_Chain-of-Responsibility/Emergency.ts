import { Emergency, EmergencySituation } from './types';

export class Firefighters implements Emergency {
  call(situation: EmergencySituation): string | void {
    if (situation === EmergencySituation.Fire) {
      return 'extinguisher';
    }
  }
}

export class Police implements Emergency {
  call(situation: EmergencySituation): string | void {
    if (situation === EmergencySituation.TrafficViolation) {
      return 'protocol';
    }
  }
}

export class MedicalAssistance implements Emergency {
  call(situation: EmergencySituation): string | void {
    if (situation === EmergencySituation.HighTemperature) {
      return 'ibuprofen';
    }
  }
}