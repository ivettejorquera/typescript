(() => {

    const sumar = (a: number, b: number): number => a + b;

    const nombre = ():string => 'Hola Ivette';

    const obtenerSalario = ():Promise<string> => {

        return new Promise( (resolve, reject ) => {
            resolve('Ivette');
        });
    }
   
    obtenerSalario().then( a => console.log( a.toUpperCase() ))
})();


