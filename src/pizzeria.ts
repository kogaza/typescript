export abstract class Pizzeria {
    static id = 0;
    id;
    name: string;
    private pizzasInOrder: any[] = [];
    private maxPizzasInOven = 10;
    protected recipes = [];
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

    order(pizza) {
        this.pizzasInOrder.push(pizza);
    }

    private isOvenFull() {
        return this.pizzasInOrder.length > this.maxPizzasInOven;
    }

    abstract bake()
}
