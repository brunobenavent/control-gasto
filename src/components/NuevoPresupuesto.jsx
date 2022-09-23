import { useState } from "react";
import Mensaje from "./Mensaje";
const NuevoPresupuesto = ({presupuesto, setPresupuesto, setIsValidPresupuesto}) => {
    const [mensaje, setMensaje] = useState('');

    const handelPresupuesto = e =>{
        e.preventDefault();
        if (isNaN(presupuesto) || (presupuesto<=0 )){
            setMensaje('Ingresa un presupuesto válido');
            return;
        }
        setMensaje('');
        setIsValidPresupuesto(true);
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
                    type="number"
                    className='nuevo-presupuesto'
                    placeholder='Añade tu presupuesto'
                    value = {presupuesto}
                    onChange = {e => setPresupuesto(Number(e.target.value))}
            />
            <input type="submit" value = "Añadir" />
            {mensaje && <Mensaje tipo= 'error'>{mensaje}</Mensaje>}
        </div>
      </form>
    </div>
  )
}

export default NuevoPresupuesto
