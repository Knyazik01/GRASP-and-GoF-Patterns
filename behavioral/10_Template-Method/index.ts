import { IWriteToFile } from './types';
import { WriteDateToFile, WriteTimeToFile } from './WriteToFile';

const dateWriter: IWriteToFile = new WriteDateToFile();
const timeWriter: IWriteToFile = new WriteTimeToFile();

dateWriter.saveFile('date.txt');
timeWriter.saveFile('time.txt');

setTimeout(() => {
  dateWriter.saveFile('date2.txt');
  timeWriter.saveFile('time2.txt');
}, 5000);