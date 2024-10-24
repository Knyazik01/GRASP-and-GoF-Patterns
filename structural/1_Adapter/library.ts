export class LibraryRectangle {
  largeur: number;
  hauteur: number;

  constructor(largeur: number, hauteur: number) {
    this.largeur = largeur;
    this.hauteur = hauteur;
  }

  public obtenirLePerimetre(): number {
    return (this.largeur + this.hauteur) * 2;
  };

  public obtenirLaSurface(): number {
    return this.largeur * this.hauteur;
  };
}