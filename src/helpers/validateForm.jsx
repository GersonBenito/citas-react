
export const validateForm = (formulario) =>{
    let validate = false;
    // let message = '';

    // ECMAScript 7
    for (const [llave,valor] of Object.entries(formulario)) {
        
        if(!valor){
            validate = true;
            // message = 'Uno o mas campos estan vacios'
        }
    }

    return [ validate ];

}