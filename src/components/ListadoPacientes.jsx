import { Paciente } from './Paciente'

export const ListadoPacientes = ({ pacientes }) => {

    console.log(pacientes);
    
    return (
        <div className="md:w-1/2 lg:w-3/5 md:h-screen lg:overflow-y-scroll">
            <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
            <p className="text-xl mt-5 mb-10 text-center">
                Administra tus {''}
                <span className="text-indigo-600 font-bold">Pacientes Citas</span>
            </p>

            {
                pacientes.length > 0 ? (

                    pacientes.map(paciente => <Paciente key={ paciente.uid } {...paciente} />)

                ):(
                    <h1>No hay pacientes agregados</h1>
                )
            }

        </div>
    )
}
