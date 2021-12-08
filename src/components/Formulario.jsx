import { useEffect, useState } from 'react';
import { generaraUid } from '../helpers/generarUid';
import { validateForm } from '../helpers/validateForm';
import { Error } from './Error';

export const Formulario = ({ setPacientes, pacientes, paciente, setPaciente }) => {

    const [error, setError] = useState(false);

    const [formulario, setFormulario] = useState({
        mascota: '',
        propietario: '',
        email: '',
        alta: '',
        sintomas: '',
    });

    const { mascota, propietario, email, alta, sintomas } = formulario;

    const handleInputChange = ({target}) =>{
        const { name, value } = target;

        setFormulario({
            ...formulario,
            [name]: value
        });
    }

    const resetForm = () =>{

        setFormulario({
            mascota: '',
            propietario: '',
            email: '',
            alta: '',
            sintomas: '',
        });
    }

    const handleSubmit = (e) =>{
        
        e.preventDefault();
       
        // validar formulario
        const [validate] = validateForm(formulario);

        if(validate){
            setError(validate);
            return;
        }

        if(paciente.uid){
            // editar paciente
            const datos = {
                uid: paciente.uid, 
                ...formulario
            }

            const pacienteActulizado = pacientes.map( pacienteState => pacienteState.uid === paciente.uid ? datos : pacienteState );

            setPacientes(pacienteActulizado);
            setPaciente({});

        }else{
            // agregar paciente
            const datos = {
                uid: generaraUid(), 
                ...formulario
            }
            setPacientes([datos, ...pacientes])
        }
        
        setError(validate);
        resetForm();

    }

    const handleCancelUpdate = () =>{
        setPaciente({});
        resetForm();
    }

    useEffect(()=>{

        if(Object.keys(paciente).length > 0){
            setFormulario(paciente);
        }

    },[paciente])

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

                <div className="text-center flex justify-between">

                    <input 
                        type="submit"
                        className={`
                            bg-indigo-600 
                            text-white 
                            ${!paciente.uid ? 'w-full':''}
                            uppercase 
                            font-bold 
                            rounded-md 
                            p-3 
                            hover:bg-indigo-700
                            cursor-pointer
                            transition-all
                        `}
                        value={ paciente.uid ? 'Editar Paciente' : 'Agregar Paciente' } 
                    />
                   
                    {
                        paciente.uid &&
                            <input 
                                type="button"
                                className="
                                    bg-green-500
                                    text-white 
                                    uppercase 
                                    font-bold 
                                    rounded-md 
                                    p-3 
                                    hover:bg-green-700
                                    cursor-pointer
                                    transition-all
                                "
                                value="Cancelar" 
                                onClick={ handleCancelUpdate }
                            />   
                    }
                </div>
            </form>
        </div>
    )
}
