/*  Module 6: DGenerics in TypeScript */

// DataStore is a utility function that can store up to 10 string values in an array. 
// Rewrite the DataStore class so the array can store items of any type.

// Busque TODO: Add and apply a type variable
// En la declaración de la clase DataStore, agregue una variable de tipo denominada T.
// Agregue la variable de tipo T a la declaración de la propiedad _data.
// En la función AddOrUpdate, actualice el tipo del parámetro item a la variable de tipo T.
// Busque TODO Test items as numbers.
// Compruebe que la variable de tipo puede aceptar números. Declare una nueva variable denominada empIDs y asígnele un nuevo objeto DataStore.
// Llame a la función AddOrUpdate y asígnele elementos de tipo numérico.
// Busque TODO Test items as objects.
// Compruebe que la variable de tipo puede aceptar un objeto personalizado.
// Declare un tipo (type) llamado Pets que contenga tres propiedades: name como string, breed como string, y age como number. Declare una nueva variable denominada pets y asígnele un nuevo objeto DataStore.
// Llame a la función AddOrUpdate y asígnele objetos Pet.


    // TODO: Add and apply a type variable.
    class DataStore<T> {

        private _data: Array<T> = new Array(10);
        
        AddOrUpdate(index: number, item: T) {
            if(index >=0 && index < 10) {
                this._data[index] = item;
            } else {
                console.log('Index is greater than 10')
            }
        }
        GetData(index: number) {
            if(index >=0 && index < 10) {
                return this._data[index];
            } else {
                return
            }
        }
    }
    
    let cities = new DataStore();
    
    cities.AddOrUpdate(0, "Mumbai");
    cities.AddOrUpdate(1, "Chicago");
    cities.AddOrUpdate(11, "London");       // item not added
    
    console.log(cities.GetData(1));         // returns 'Chicago'
    console.log(cities.GetData(12));        // returns 'undefined'
    
    // TODO Test items as numbers.

    let empIDs = new DataStore<number>();
    empIDs.AddOrUpdate(0, 50);
    empIDs.AddOrUpdate(1, 65);
    console.log(empIDs.GetData(0))
    
    // TODO Test items as objects.

    type Pets = {
        name: string;
        breed: string;
        age: number;
    }

    let pets = new DataStore<Pets>();
    pets.AddOrUpdate(0, {name: 'Rex', breed: 'Labrador', age: 4});
    pets.AddOrUpdate(1, {name: 'Spark', breed: 'German Shepherd', age: 6});
    console.log(pets.GetData(0));
    console.log(pets.GetData(1));
    