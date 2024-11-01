import Organiser from './Organiser';
import { State } from './types';
import Caretaker from './Caretaker';

const initialState: State = '';

const organiser = new Organiser(initialState);
const caretaker = new Caretaker(organiser);

console.info('--------------------');

caretaker.getHistory(); // empty

console.info('--------------------');

organiser.changeState('New State V1')
caretaker.saveCurrentState('v1.0.0'); // create backup
caretaker.getHistory();

console.info('--------------------');

organiser.changeState('New State V2')
caretaker.saveCurrentState('v2.0.0');
caretaker.getHistory();

console.info('--------------------');

organiser.changeState('Latest')
caretaker.saveCurrentState('v3.0.0');
caretaker.getHistory();

console.info('--------------------');

caretaker.undo(); // goto prev version
caretaker.getHistory();