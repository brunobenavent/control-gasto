import { useState } from "react";
import Mensaje from "./Mensaje";
const NuevoPresupuesto = ({presupuesto, setPresupuesto}) => {
    const [mensaje, setMensaje] = useState('');
    const [error, setError] = useState(false);

    const handelPresupuesto = e =>{
        e.preventDefault();
        if (isNaN(Number(presupuesto)) || (Number(presupuesto)<=0 )){
            setMensaje('Ingresa un presupuesto válido')
        }else{
            
        }
    } 
  return (
    
    <div className='contenedor-presupuesto contenedor sombra'>
        
      <form
            className='formulario' 
            onSubmit={handelPresupuesto} 
        >
        <div className="campo">
            <label>Definir Presupuesto</label>
            <input
                    type="text"
                    className='nuevo-presupuesto'
                    placeholder='Añade tu presupuesto'
                    value = {presupuesto}
                    onChange = {e => setPresupuesto(e.target.value)}
            />
            <input type="submit" value = "Añadir" />
            {mensaje && <Mensaje tipo= 'error'>{mensaje}</Mensaje>}
        </div>
      </form>
    </div>
  )
}

export default NuevoPresupuesto
