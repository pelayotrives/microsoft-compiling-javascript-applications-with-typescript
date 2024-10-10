/* Extender clases */
// static se utiliza para definir propiedades y métodos que pertenecen a la clase en sí misma, no a las instancias (objetos) creadas a partir de esa clase.

//! Respuesta
/* tsc --init en la raiz de la carpeta para inicializar el tsconfig.json.
En el archivo tsconfig.json, buscar la opción de destino y cambiar a "target": "es2016".
tsc para compilar el archivo module05-5.tsc en module05-5.js.
node module05-5.js para ejecutar el archivo y ver el resultado en consola. */

//! Pruebas con interfaces
// Declaramos una interfaz Vehicle que describa las propiedades y los métodos de la clase Car.
// La interfaz incluye los parámetros del constructor, no las propiedades.
// Con propiedades privadas (por ejemplo, _make: string), TypeScript producirá un error.
// La interfaz solo puede describir el lado público de la clase y no puede incluir miembros privados.

//! Ejericio de implementación de interfaces
interface Vehicle {
  make: string;
  color: string;
  doors: number;
  accelerate(speed: number): string;
  brake(): string;
  turn(direction: "left" | "right"): string;
}

class Bugatti implements Vehicle {
  // Propiedades de la clase Bugatti
  private _make: string;
  private _color: string;
  private _doors: number;

  // Constructor de la clase Bugatti
  constructor(make: string, color: string, doors = 4) {
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

  // Métodos de la clase Bugatti
  accelerate(speed: number): string {
    return `${this.worker()} is accelerating to ${speed} MPH.`;
  }
  brake(): string {
    return `${this.worker()} is braking with the standard braking system.`;
  }
  turn(direction: "left" | "right"): string {
    return `${this.worker()} is turning ${direction}`;
  }
  protected worker(): string {
    return this._make;
  }
}

// ! Ejercicio de extensión de clases
class ElectricBugatti extends Bugatti {
  // Propiedades únicas de la clase ElectricBugatti
  _range: number;
  // Constructor
  // La lista de parámetros puede incluir cualquiera de las propiedades de la clase base y la subclase
  // Los parámetros obligatorios deben aparecer antes de los opcionales).
  // En el cuerpo de constructor,see agrega la clave super() para incluir los parámetros de la clase base.
  // La palabra clave super ejecuta el elemento constructor de la clase base cuando se ejecuta.
  // super debe aparecer antes de cualquier referencia a this. cuando se refiera a las propiedades de la subclase.
  constructor(make: string, color: string, doors = 2, range: number) {
    super(make, color, doors);
    this._range = range;
  }
  // Accessors
  get range() {
    return this._range;
  }
  // Mutators
  set range(range: number) {
    this._range = range;
  }
  // Methods
  charge(): string {
    // En la clase original cambiamos el método worker() a protected para que pueda ser accedido por las subclases.
    return `${this.worker()} is charging.`;
  }
  brake(): string {
    return `${this.worker()} is braking with the regenerative braking system.`;
  }
}

// Crear instancias de Bugatti
let bugattiEx1 = new ElectricBugatti("Bugatti E40", "black", 2, 800);
let bugattiEx2 = new ElectricBugatti("Bugatti C50", "red", 4, 500);
console.log(bugattiEx1.accelerate(60));
console.log(bugattiEx2.doors);
console.log(bugattiEx2.brake());

// Nota:
// La diferencia entre las interfaces y las clases es que las clases definen  detalles de la implementación.
// Las interfaces definen únicamente cómo se estructuran los datos.
// Las clases también proporcionan una forma de crear plantillas de objetos, definiendo valores predeterminados.

interface Dog {
  id?: number;
  name: string;
  age: number;
  description: string;
}

class DogRecord implements Dog {
  id: number;
  name: string;
  age: number;
  description: string;

  constructor({ name, age, description, id = 0 }: Dog) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.description = description;
  }

  static load(id: number): DogRecord {
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
