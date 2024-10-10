/* Jugar con modificadores de acceso */

//! Respuesta
/* tsc --init en la raiz de la carpeta para inicializar el tsconfig.json.
En el archivo tsconfig.json, buscar la opción de destino y cambiar a "target": "es2016".
tsc para compilar el archivo module05-3.tsc en module05-3.js.
node module05-3.js para ejecutar el archivo y ver el resultado en consola. */

class OtherCar {
  // Propiedades de la clase Car
  private _make: string;
  private _color: string;
  private _doors: number;

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
  private worker(): string {
    return this._make;
  }
}

let car3Ex1 = new OtherCar('Cool Car Company', 'blue', 2); 

// No acepta el acceso a la propiedad _make, _colors o _doors, ya que son privadas. Tampoco acepta el acceso al método worker.
console.log(car3Ex1)
