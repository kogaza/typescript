import { Orderable } from "./orderable";
import { Pizza, Status } from "./pizza.model";

export abstract class Pizzeria implements Orderable {
    static id = 0;
    id: number;
    name: string;
    pizzasInOrder: Pizza[] = [];
    private maxPizzasInOven = 10;
    protected recipes: string[] = [];
    private _manager = 'Jan Kowalski';

    constructor(name: string) {
        this.id = Pizzeria.id++;
        this.name = name;
    }

    get manager() {
        return this._manager;
    }

    set manager(manager) {
        this._manager = manager;
    }

    order(pizza: Pizza) {
        this.pizzasInOrder.push(pizza);
    }

    changeStatus(index: number, status: Status) {
        this.pizzasInOrder[index].status = status;
    }

    isOvenFull() {
        return this.pizzasInOrder.length > this.maxPizzasInOven;
    }

    abstract bake(): string
}
