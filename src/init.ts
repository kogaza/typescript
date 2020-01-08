import {PolishPizzeria} from './polish-pizzeria';
import {AmericanPizzeria} from './american-pizzeria';

const laStrada = new PolishPizzeria('La Strada', true);
const americanHouse = new AmericanPizzeria('American House');
const venezia = new PolishPizzeria('Venezia', false);

console.log(laStrada, americanHouse, venezia);