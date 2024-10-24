import Rectangle from './Adapter';
import { IRectangle } from './types';

const rectangle: IRectangle = new Rectangle(2, 1);

console.info('width:', rectangle.width);
console.info('height:', rectangle.height);
console.info('perimeter:', rectangle.getPerimeter());
console.info('area:', rectangle.getArea());