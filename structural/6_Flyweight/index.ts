import { Army } from './Army';

const army = new Army();
army.addTank(0, 0);
army.addSoldat(10, 10);
army.addTank(20, 20);
army.addSoldat(30, 30);

console.info('-----------------------');

console.info('FIRE:');
army.shotAll();

console.info('-----------------------');

console.log('Moving the army by (5, 5):');
army.moveAll(5, 5);

console.info('-----------------------');

console.info('FIRE:');
army.shotAll();

army.relocateAll(0, 0);

console.info('-----------------------');

console.log('Draw army:');
army.drawAll();