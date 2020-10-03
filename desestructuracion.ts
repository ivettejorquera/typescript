(() => {
   
    const avenger = {
        nombre: 'Steve',
        clave : 'Capitán América',
        poder : 'Droga'
    }

    console.log(avenger.nombre);
    console.log(avenger.clave);
    console.log(avenger.poder);

    const { nombre, clave, poder } = avenger
    
    console.log(nombre);
    console.log(clave);
    console.log(poder);

    const extraer = ( { nombre, poder}: any ) => {
        
        //const { nombre, poder } = avenger;

        console.log(nombre);
        console.log(poder);
        
    }

    //extraer( avenger );
    
    const avengers: string[] = ['Thor', 'Ironman', 'Spiderman'];

    console.log( avengers[0]);
    console.log( avengers[1]);
    console.log( avengers[2]);

    //const [ loki, hombre, arana] = avengers;
    const [ , , arana ] = avengers

    //console.log(loki);
    //console.log(hombre);
    console.log(arana);
    
    
    const extraerArr = ( [thor, ironman, spiderman]: string[] ) => {

        console.log( thor );
        console.log( ironman );
        console.log( spiderman );
    }

    extraerArr( avengers )
    
    
    
})();


