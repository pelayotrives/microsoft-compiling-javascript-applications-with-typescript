/*
Cree una nueva class mediante la palabra clave class y el nombre de clase, Car.
eclare las tres propiedades de la clase Car: _make: string, _color: string y _doors: number.
*/

//! Respuesta
/* tsc --init en la raiz de la carpeta para inicializar el tsconfig.json.
En el archivo tsconfig.json, buscar la opción de destino y cambiar a "target": "es2016".
tsc para compilar el archivo module05-1.tsc en module05-1.js.
node module05-1.js para ejecutar el archivo y ver el resultado en consola. */

class Car {
  // Propiedades de la clase Car
  _make: string;
  _color: string;
  _doors: number;

  // Constructor de la clase Car
  constructor(make: string, color: string, doors = 4) {
    this._make = make;
    this._color = color;
    this._doors = doors;
  }

  // Accesos de la clase Car
  get make() {
    return this._make;
  }
  get color() {
    return "The color of the car is " + this._color;
  }
  get doors() {
    return this._doors;
  }

  // Mutadores de la clase Car
  set make(make: string) {
    this._make = make;
  }
  set color(color: string) {
    this._color = color;
  }
  set doors(doors: number) {
    if (doors % 2 === 0) {
      this._doors = doors;
    } else {
      throw new Error("Doors must be an even number");
    }
  }

  // Métodos de la clase Car
  accelerate(speed: number): string {
    return `${this.worker()} is accelerating to ${speed} MPH.`;
  }
  brake(): string {
    return `${this.worker()} is braking with the standard braking system.`;
  }
  turn(direction: "left" | "right"): string {
    return `${this.worker()} is turning ${direction}`;
  }
  worker(): string {
    return this._make;
  }
}

// Crear una instancia de Car
const car1Ex1 = new Car('Toyota', 'red', 4);

// Usar los getters
console.log(car1Ex1.make);
console.log(car1Ex1.color);
console.log(car1Ex1.doors);

// Usar los métodos
console.log(car1Ex1.accelerate(60));
console.log(car1Ex1.brake());
console.log(car1Ex1.turn('left'));

// Usar los setters
car1Ex1.color = 'blue';
console.log(car1Ex1.color);

// Intentar asignar un número impar de puertas
try {
  car1Ex1.doors = 3;
} catch (error) {
  if (error instanceof Error) {
    console.error(error.message);
  } else {
    console.error("An unknown error occurred");
  }
}

