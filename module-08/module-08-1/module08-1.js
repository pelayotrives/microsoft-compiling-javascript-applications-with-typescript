"use strict";
//! Respuesta
/* tsc --init en la raiz de la carpeta para inicializar el tsconfig.json.
En el archivo tsconfig.json, buscar la opción de destino y cambiar a "target": "es2016".
tsc para compilar el archivo module-08/module08-X.tsc en module-08/module08-X.js.
node module-08/module08-X.js para ejecutar el archivo y ver el resultado en consola. */
// Defina un nuevo espacio de nombres con la palabra clave namespace seguida del nombre del espacio de nombres. Puede definir tantos espacios de nombres como sea necesario en un solo archivo TypeScript.
// En la parte superior del archivo, defina dos espacios de nombres denominados Greetings y GreetingsWithLength.
/* namespace Greetings {}
namespace GreetingsWithLength {} */
// Ahora puede definir funciones y clases dentro de la definición del espacio de nombres.
// Todos los componentes definidos en el espacio de nombres se limitan al espacio de nombres y se quitan del ámbito global.
// Agregue una nueva función llamada returnGreeting al espacio de nombres Greetings.
// Esta función devuelve el valor de un parámetro a la consola.
/* namespace Greetings {
    function returnGreeting (greeting: string) {
        console.log(`The message from namespace Greetings is ${greeting}.`);
    }
} */
// Agregue dos nuevas funciones, returnGreeting y getLength, al espacio de nombres GreetingsWithLength.
// La función returnGreeting utiliza la función auxiliar getLength para determinar la longitud del saludo antes de devolver el mensaje a la consola.
/* namespace GreetingsWithLength {
    function returnGreeting (greeting: string) {
        let greetingLength = getLength(greeting);
        console.log(`The message from namespace GreetingsWithLength is ${greeting}. It is ${greetingLength} characters long.`);
    }
    function getLength(message: string): number {
        return message.length
    }
} */
// Si desea que una función o una clase estén disponibles para el código fuera del espacio de nombres,
// agregue la palabra clave export antes de su nombre. Si se omite la palabra clave export, el componente
// solo está disponible dentro del espacio de nombres. Puede hacerlo si define componentes a los que solo
// deben poder acceder directamente otros componentes del espacio de nombres. Agregue la palabra clave
// export a la función returnGreeting en ambos espacios de nombres.
// La función getLength no debe ser accesible fuera del espacio de nombres GreetingsWithLength, de modo
// que omita la palabra clave export.
var Greetings;
(function (Greetings) {
    function returnGreeting(greeting) {
        console.log(`The message from namespace Greetings is ${greeting}.`);
    }
    Greetings.returnGreeting = returnGreeting;
})(Greetings || (Greetings = {}));
var GreetingsWithLength;
(function (GreetingsWithLength) {
    function returnGreeting(greeting) {
        let greetingLength = getLength(greeting);
        console.log(`The message from namespace GreetingsWithLength is ${greeting}. It is ${greetingLength} characters long.`);
    }
    GreetingsWithLength.returnGreeting = returnGreeting;
    function getLength(message) {
        return message.length;
    }
    GreetingsWithLength.getLength = getLength;
})(GreetingsWithLength || (GreetingsWithLength = {}));
// Para usar una clase o función dentro de un espacio de nombres, utilice el nombre del espacio de nombres
// como prefijo para del componente. Intente llamar a la función returnGreeting sin especificar el espacio
// de nombres. Esto devuelve un error porque ambas funciones returnGreeting están fuera del ámbito en el
// espacio de nombres global. Ahora, pruebe a utilizar Greetings o GreetingsWithLength como prefijo para
// la función returnGreeting. Esto proporciona acceso a la función dentro de cada espacio de nombres respectivo.
// returnGreeting('Hola!'); # Retorna un error
Greetings.returnGreeting('Bonjour!');
GreetingsWithLength.returnGreeting('Oi!');
// También puede anidar espacios de nombres dentro de espacios de nombres, proporcionando incluso más opciones para organizar el código.
// Cree un nuevo espacio de nombres denominado AllGreetings y luego mueva los espacios de nombres Greetings y GreetingsWithLength que creó anteriormente dentro de él.
// Agregue la palabra clave export antes de ambos nombres de espacio de nombres.
// Esto permite que el espacio de nombres sea accesible fuera del espacio de nombres AllGreetings.
var AllGreetings;
(function (AllGreetings) {
    let Greetings;
    (function (Greetings) {
        function returnGreeting(greeting) {
            console.log(`The message from namespace Greetings is ${greeting}.`);
        }
        Greetings.returnGreeting = returnGreeting;
    })(Greetings = AllGreetings.Greetings || (AllGreetings.Greetings = {}));
    let GreetingsWithLength;
    (function (GreetingsWithLength) {
        function returnGreeting(greeting) {
            let greetingLength = getLength(greeting);
            console.log(`The message from namespace GreetingsWithLength is ${greeting}. It is ${greetingLength} characters long.`);
        }
        GreetingsWithLength.returnGreeting = returnGreeting;
        function getLength(message) {
            return message.length;
        }
        GreetingsWithLength.getLength = getLength;
    })(GreetingsWithLength = AllGreetings.GreetingsWithLength || (AllGreetings.GreetingsWithLength = {}));
})(AllGreetings || (AllGreetings = {}));
// Para llamar a las funciones, empiece por escribir el nombre del espacio de nombres más externo, AllGreetings,
// un punto y, después, el nivel siguiente en la jerarquía del espacio de nombres, Greetings o GreetingsWithLength.
// Continúe por la jerarquía hasta alcanzar el nombre de la función.
AllGreetings.Greetings.returnGreeting('Hola!');
AllGreetings.GreetingsWithLength.returnGreeting('Hello!');
// Para importar un espacio de nombres en otro archivo, utilice la palabra clave import seguida del nombre del espacio de nombres.
var greet = AllGreetings.Greetings;
greet.returnGreeting('Imported Bonjour!');
