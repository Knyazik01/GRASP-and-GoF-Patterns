export enum EmergencySituation {
  Fire = 'Fire',
  TrafficViolation = 'TrafficViolation',
  HighTemperature = 'HighTemperature',
}

export interface Emergency {
  call(emergencySituation: EmergencySituation): string | void;
}