import {PolishPizzeria} from './polish-pizzeria';
import {AmericanPizzeria} from './american-pizzeria';
import { Status, Size } from './pizza.model';

const laStrada = new PolishPizzeria('La Strada', true);
const americanHouse = new AmericanPizzeria('American House');
const venezia = new PolishPizzeria('Venezia', false);

const capriciosa = {
    name: 'Capriciosa',
    price: 20.99,
    size: Size.large,
    status: Status.Ordered
}

venezia.order(capriciosa);
venezia.changeStatus(0, Status.Baked);