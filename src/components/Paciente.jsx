
export const Paciente = ({ mascota, propietario, email, alta, sintomas }) => {

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
            </div>
        </>
    )
}
