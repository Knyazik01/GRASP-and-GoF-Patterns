import { IArmy, IArmyUnit } from './types';
import { Soldat, Tank } from './ArmyUnits';

export class Army implements IArmy {
  public readonly units: IArmyUnit[] = [];

  addTank(x: number, y: number): void {
    const unit = new Tank(x, y);
    this.units.push(unit);
  }

  addSoldat(x: number, y: number): void {
    const unit = new Soldat(x, y);
    this.units.push(unit);
  }


  moveAll(dx: number, dy: number): void {
    this.units.forEach(unit => {
      unit.move(dx, dy);
    });
  }

  relocateAll(x: number, y: number): void {
    this.units.forEach(unit => {
      unit.relocate(x, y);
    });
  }

  drawAll(): void {
    this.units.forEach(unit => {
      unit.draw();
    });
  }

  shotAll(): void {
    this.units.forEach(unit => {
      unit.shot();
    });
  }
}