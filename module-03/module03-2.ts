/* Puede usar interfaces que describan los tipos de matriz en los que se puede indexar.
Los tipos indexables tienen una signatura de índice que describe el tipo que se puede usar para indexar en el objeto, junto con los tipos de valores devueltos correspondientes al indexar.
Por ejemplo, la interfaz IceCreamIndexArray declara una signatura de índice como number y devuelve un tipo string. Esta signatura de índice indica que la interfaz IceCreamIndexArray está indexada con un número y devolverá una cadena. */
interface IceCreamIndexArray {
    [index: number]: string;
}

let myIndexedIceCream: IceCreamIndexArray;
myIndexedIceCream = ['chocolate', 'vanilla', 'strawberry'];
let myString: string = myIndexedIceCream[0];
console.log(myString);

/* Se puede usar una interfaz para describir las API de JavaScript existentes, y aclarar los parámetros de función y los tipos de valor devueltos.
La interfaz le permitirá comprender claramente qué espera una API y qué devolverá. */

const fetchURL = 'https://jsonplaceholder.typicode.com/posts'

interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

async function fetchPosts(url: string) {
    let response = await fetch(url); 
    let body = await response.json();
    return body as Post[];
}
 
async function showPost() {
    let posts = await fetchPosts(fetchURL);
    // Display the contents of the first item in the response
    let post = posts[0];
    console.log('Post #' + post.id)
    // If the userId is 1, then display a note that it's an administrator
    console.log('Author: ' + (post.userId === 1 ? "Administrator" : post.userId.toString()))
    console.log('Title: ' + post.title)
    console.log('Body: ' + post.body)
}

showPost();

