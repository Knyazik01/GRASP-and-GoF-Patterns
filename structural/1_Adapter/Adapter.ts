import { IRectangle } from './types';
import { LibraryRectangle } from './library';

class Rectangle implements IRectangle {
  private rectangle: LibraryRectangle;

  public width: number;
  public height: number;

  constructor(width: number, height: number) {
    this.rectangle = new LibraryRectangle(width, height);

    // adapt fields
    this.width = this.rectangle.largeur;
    this.height = this.rectangle.hauteur;
  }

  // adapt methods
  public getPerimeter(): number {
    return this.rectangle.obtenirLePerimetre();
  }

  public getArea(): number {
    return this.rectangle.obtenirLaSurface();
  }
}

export default Rectangle;