"use strict";
//! Respuesta
/* tsc --init en la raiz de la carpeta para inicializar el tsconfig.json.
En el archivo tsconfig.json, buscar la opción de destino y cambiar a "target": "es2016".
tsc para compilar el archivo module07-X.tsc en module07-X.js.
node module07-X.js para ejecutar el archivo y ver el resultado en consola. */
Object.defineProperty(exports, "__esModule", { value: true });
// Cree un archivo denominado main.ts. Este archivo contendrá el código principal de la aplicación, incluidas las instrucciones import.
// Importe la función returnGreeting desde greetings_module.ts mediante la palabra clave import.
const greetings_module_js_1 = require("./greetings-module.js");
// Si greetings_module.ts hubiera contenido varios componentes, podría importar todo el módulo en una sola variable
// (por ejemplo, allGreetingFunctions), tal como se muestra en la instrucción siguiente.
// Después, puede usar la variable para acceder a todas las exportaciones de módulos.
// ---
// import * as allGreetingFunctions from './greetings_module.js';
// ---
// Intente importar la función returnGreeting desde greetings-utilities-module.ts mediante la instrucción import { returnGreeting } from './greetings-utilities_module.js'.
// Observará un error porque ambos archivos contienen una función returnGreeting y ahora tiene un conflicto de nomenclatura en el ámbito global de main.ts.
// Corrija el conflicto de nomenclatura; para ello, asigne un nombre nuevo a la segunda instancia de returnGreeting.
// Reemplace { returnGreeting } por { returnGreeting as returnGreetingLength }.
const greetings_utilities_module_js_1 = require("./greetings-utilities-module.js");
// Ahora puede usar returnGreetingLength en lugar del nombre de función en el código.
(0, greetings_module_js_1.returnGreeting)('Hola!');
(0, greetings_utilities_module_js_1.returnGreeting)('Ciao!');
// Para ejecutar un módulo desde una página web, recuerde establecer la opción type en "module":
// <script type="module" src=".\main.js"></script>
