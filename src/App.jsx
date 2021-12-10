import { useState, useEffect } from 'react'
import { Header } from './components/Header'
import { Formulario } from './components/Formulario'
import { ListadoPacientes } from './components/ListadoPacientes'

function App() {

  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});

  const eliminarPaciente = (uid) =>{
    const pacientesActualizados = pacientes.filter(pasient => pasient.uid !== uid);
    setPacientes(pacientesActualizados);

  }

  const obtenerLocalStorage = () =>{
    const pacientestLS = JSON.parse(localStorage.getItem('pacientes')) || [];
    setPacientes(pacientestLS);
  }

  useEffect(()=>{
    obtenerLocalStorage();
  },[])

  useEffect(() =>{
    localStorage.setItem('pacientes', JSON.stringify(pacientes));
  },[pacientes])

  return (
    <div className="container mx-auto mt-10">
      <Header />
      <div className="mt-12 md:flex">
        <Formulario pacientes={ pacientes } setPacientes={ setPacientes } setPaciente={ setPaciente } paciente={ paciente } />
        <ListadoPacientes pacientes={ pacientes } setPaciente={ setPaciente } eliminarPaciente={ eliminarPaciente } />
      </div>
    </div>
  )
}

export default App
