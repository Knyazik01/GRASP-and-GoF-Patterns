import { Command } from './types';

export class PizzaInvoker {
  private commands: Command[] = [];

  addCommand(command: Command): void {
    this.commands.push(command);
  }

  makePizza(): void {
    for (const command of this.commands) {
      command.execute();
    }
  }
}