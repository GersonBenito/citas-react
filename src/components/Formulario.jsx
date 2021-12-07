import { useState } from 'react';
import { validateForm } from '../helpers/validateForm';
import { useForm } from '../hooks/useForm';
import { Error } from './Error';

export const Formulario = ({ setPacientes, pacientes }) => {

    const [error, setError] = useState(false);

    const [formulario, handleInputChange, resetForm] = useForm({
        mascota: '',
        propietario: '',
        email: '',
        alta: '',
        sintomas: '',
    });

    const { mascota, propietario, email, alta, sintomas } = formulario;

    const handleSubmit = (e) =>{
        let uid = Date.now().toString(36) + Math.random().toString(36).substr(2);

        e.preventDefault();

        const datos = {uid, ...formulario}
       
        // validar formulario
        const [validate] = validateForm(datos);

        if(validate){
            setError(validate);
            return;
        }
        
        setPacientes([datos, ...pacientes])
        setError(validate);
        resetForm();

    }

    return (
        <div className="md:w-1/2 lg:w-2/5 mx-5" >
            <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
            <p className="text-center text-lg mt-5 mb-10">
                Añade Pacientes y {''}
                <span className="text-indigo-600 font-bold">Administralos</span>
            </p>

            <form onSubmit={ handleSubmit } className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
                {
                    error && <Error message='Uno o mas campos vacios!' />
                }
                <div className="mb-5">
                    <label 
                        className="block text-gray-700 font-bold uppercase" 
                        htmlFor="mascota"
                    >
                        Nombre Mascota
                    </label>
                    <input 
                        id="mascota"
                        type="text"
                        name="mascota"
                        value={ mascota }
                        onChange={ handleInputChange }
                        placeholder="Nombre de la mascota" 
                        className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400"
                    />
                </div>

                <div className="mb-5">
                    <label 
                        className="block text-gray-700 font-bold uppercase" 
                        htmlFor="propietario"
                    >
                        Nombre Propietario
                    </label>
                    <input 
                        id="propietario"
                        type="text"
                        name="propietario"
                        value={ propietario }
                        onChange={ handleInputChange }
                        placeholder="Nombre del propietario" 
                        className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400"
                    />
                </div>

                <div className="mb-5">
                    <label 
                        className="block text-gray-700 font-bold uppercase" 
                        htmlFor="email"
                    >
                        Email
                    </label>
                    <input 
                        id="email"
                        type="text"
                        name="email"
                        value={ email }
                        onChange={ handleInputChange }
                        placeholder="Email Contacto Propietario" 
                        className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400"
                    />
                </div>

                <div className="mb-5">
                    <label 
                        className="block text-gray-700 font-bold uppercase" 
                        htmlFor="alta"
                    >
                        Alta
                    </label>
                    <input 
                        id="alta"
                        type="date"
                        name="alta"
                        value={ alta }
                        onChange={ handleInputChange }
                        className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400"
                    />
                </div>

                <div className="mb-5">
                    <label 
                        className="block text-gray-700 font-bold uppercase" 
                        htmlFor="sintomas"
                    >
                        Sintomas
                    </label>
                    <textarea 
                        id="sintomas"
                        type="date"
                        name="sintomas"
                        value={ sintomas }
                        onChange={ handleInputChange }
                        className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400"
                        placeholder="Describe los sintomas"
                    />
                </div>

                <input 
                    type="submit"
                    className="
                        bg-indigo-600 
                        w-full 
                        text-white 
                        uppercase 
                        font-bold 
                        rounded-md 
                        p-3 
                        hover:bg-indigo-700
                        cursor-pointer
                        transition-all
                    "
                    value="Agregar Paciente" 
                />
            </form>
        </div>
    )
}
