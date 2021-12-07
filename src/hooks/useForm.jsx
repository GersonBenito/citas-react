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

    const resetForm = () =>{

        setFormulario(initialState);
    }

    return [ formulario, handleInputChange,resetForm ];

}