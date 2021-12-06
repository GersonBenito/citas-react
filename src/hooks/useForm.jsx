import { useState } from "react"

export const useForm = (initialState = {}) =>{

    const [formulario, setFormulario] = useState(initialState);

    const handleInputChange = ({target}) =>{
        const { name, value } = target;

        setFormulario({
            ...formulario,
            [name]: value
        });
    }

    return [ formulario, handleInputChange ];

}