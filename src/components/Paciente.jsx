export const Paciente = ({ paciente, setPaciente, eliminarPaciente }) => {

    const { mascota, propietario, email, alta, sintomas, uid } = paciente;

    const handleGetPaciente = () =>{
        setPaciente(paciente);
    }

    const handleConfirm = () =>{
        
        const respuesta =confirm(`Esta seguro de eliminar ${mascota} del propietario ${propietario}?`);
        if(respuesta){
            eliminarPaciente(uid);
        }

    }

    return (
        <>
            <div className="mx-5 my-4 bg-white shadow-md px-5 py-5 rounded-lg">
                <p className="font-bold mb-3 text-gray-700 uppercase">
                    Nombre: {''}
                    <span className="font-normal normal-case">{ mascota }</span>
                </p>

                <p className="font-bold mb-3 text-gray-700 uppercase">
                    Propietario: {''}
                    <span className="font-normal normal-case">{ propietario }</span>
                </p>

                <p className="font-bold mb-3 text-gray-700 uppercase">
                    Email: {''}
                    <span className="font-normal normal-case">{ email }</span>
                </p>

                <p className="font-bold mb-3 text-gray-700 uppercase">
                    Alta: {''}
                    <span className="font-normal normal-case">{ alta }</span>
                </p>

                <p className="font-bold mb-3 text-gray-700 uppercase">
                    Sintomas: {''}
                    <span className="font-normal normal-case">{ sintomas }</span>
                </p>
                <div className="flex justify-between">
                    <button 
                        className="
                            py-2 px-10 
                            bg-indigo-600 
                            hover:bg-indigo-700 
                            text-white font-bold 
                            uppercase 
                            rounded-lg
                        "
                        onClick={ handleGetPaciente }
                    >
                        Editar
                    </button>
                    <button 
                        className="
                            py-2 px-10 
                            bg-red-600 
                            hover:bg-red-700 
                            text-white font-bold 
                            uppercase 
                            rounded-lg
                        "
                        onClick={ handleConfirm }
                    >
                        Eliminar
                    </button>
                </div>
            </div>
        </>
    )
}
