(function(){
   
    function getEdad(){
        return  100 + 100 + 300
    }

    const nombre = 'Ivette';
    const apellido = 'Jorquera';
    const edad = 34;

    //const salida = nombre + apellido + edad;
    //const salida = nombre + " " + apellido + " ( " + edad + " )"; 

    const salida = ` ${ nombre } ${ apellido } ( ${ getEdad() } )  `;
    //Ivette Jorquera (34)
    console.log(salida);
    
})();


