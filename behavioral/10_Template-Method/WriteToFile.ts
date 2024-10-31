import { writeFileSync } from 'fs';
import { IWriteToFile } from './types';

abstract class WriteToFile implements IWriteToFile {
  protected fileName: string;
  protected content: string;

  private setFileName(fileName: string): void {
    this.fileName = fileName;
  }

  protected abstract setContent(): void;

  private writeFile() {
    writeFileSync(this.fileName, this.content, {
      flag: 'w',
    });
  }

  public saveFile(fileName: string): void {
    // set file name
    this.setFileName(fileName);

    // set content to save
    this.setContent();

    // open file for reading + set content into file
    this.writeFile();
  }
}

export class WriteDateToFile extends WriteToFile {
  protected setContent(): void {
    this.content = new Date().toLocaleDateString();
  }
}

export class WriteTimeToFile extends WriteToFile {
  protected setContent(): void {
    this.content = new Date().toLocaleTimeString();
  }
}