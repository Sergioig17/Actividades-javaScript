
    var nombre="Sergio";
    console.log(nombre);


    let edad=12;
    console.log(edad);
    edad=32;
    console.log(edad);

    const pais="España";
    console.log(pais);
    

    /* Uso en bloques
👉 Escribe un programa que:

Declare una variable var x = 10 dentro de un bloque {} y muéstrala fuera del bloque.
Declare una variable let y = 20 dentro de un bloque {} e intenta mostrarla fuera.
Explica la diferencia.*/

    {var x=10}
    console.log(x);
    {let y=20} /*  Let no permite mostrar fuera del bloque mientras que var si*/
    console.log(y);