"use strict";
/* Extender clases */
// static se utiliza para definir propiedades y métodos que pertenecen a la clase en sí misma, no a las instancias (objetos) creadas a partir de esa clase.
class Bugatti {
    // Constructor de la clase Bugatti
    constructor(make, color, doors = 4) {
        this._make = make;
        this._color = color;
        this._doors = doors;
    }
    // Accesos de la clase Bugatti
    get make() {
        return this._make;
    }
    get color() {
        return "The color of the car is " + this._color;
    }
    get doors() {
        return this._doors;
    }
    // Mutadores de la clase Bugatti
    set make(make) {
        this._make = make;
    }
    set color(color) {
        this._color = color;
    }
    set doors(doors) {
        if (doors % 2 === 0) {
            this._doors = doors;
        }
        else {
            throw new Error("Doors must be an even number");
        }
    }
    // Métodos de la clase Bugatti
    accelerate(speed) {
        return `${this.worker()} is accelerating to ${speed} MPH.`;
    }
    brake() {
        return `${this.worker()} is braking with the standard braking system.`;
    }
    turn(direction) {
        return `${this.worker()} is turning ${direction}`;
    }
    worker() {
        return this._make;
    }
}
// ! Ejercicio de extensión de clases
class ElectricBugatti extends Bugatti {
    // Constructor
    // La lista de parámetros puede incluir cualquiera de las propiedades de la clase base y la subclase
    // Los parámetros obligatorios deben aparecer antes de los opcionales).
    // En el cuerpo de constructor,see agrega la clave super() para incluir los parámetros de la clase base.
    // La palabra clave super ejecuta el elemento constructor de la clase base cuando se ejecuta.
    // super debe aparecer antes de cualquier referencia a this. cuando se refiera a las propiedades de la subclase.
    constructor(make, color, doors = 2, range) {
        super(make, color, doors);
        this._range = range;
    }
    // Accessors
    get range() {
        return this._range;
    }
    // Mutators
    set range(range) {
        this._range = range;
    }
    // Methods
    charge() {
        // En la clase original cambiamos el método worker() a protected para que pueda ser accedido por las subclases.
        return `${this.worker()} is charging.`;
    }
    brake() {
        return `${this.worker()} is braking with the regenerative braking system.`;
    }
}
// Crear instancias de Bugatti
let bugattiEx1 = new ElectricBugatti("Bugatti E40", "black", 2, 800);
let bugattiEx2 = new ElectricBugatti("Bugatti C50", "red", 4, 500);
console.log(bugattiEx1.accelerate(60));
console.log(bugattiEx2.doors);
console.log(bugattiEx2.brake());
class DogRecord {
    constructor({ name, age, description, id = 0 }) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.description = description;
    }
    static load(id) {
        // code to load dog from database
        const dog = new DogRecord({
            id,
            name: "Unknown",
            age: 0,
            description: "Unknown",
        });
        return dog;
    }
    save() {
        // code to save dog to database
    }
}
