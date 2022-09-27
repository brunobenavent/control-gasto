import { useState, useEffect } from 'react'
import Header from './components/Header'
import Modal from './components/Modal'
import { generarId } from './helpers'
import IconoNuevoGasto from './img/nuevo-gasto.svg'
import ListadoGastos from './components/ListadoGastos'


const App = () => {
  const [ presupuesto, setPresupuesto] = useState(0)
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false);
  const [modal, setModal] = useState(false)
  const [animarModal, setAnimarModal] = useState(false)
  const [gastos, setGastos] = useState([])
  const [gastoEditar, setGastoEditar] = useState({})

  useEffect(()=> {
    if(Object.keys(gastoEditar).length>0){
      setModal(true)
      setTimeout(() => {
      setAnimarModal(true)
    }, 500);
    }
  }, [gastoEditar])
  

  const handelNuevoGasto = () => {
    setModal(true)
    setGastoEditar({})
    setTimeout(() => {
      setAnimarModal(true)
    }, 500);
  }
  const guardarGasto = gastoState =>{
    
    if (gastoState.id){
      const gastosEditados = gastos.map(gasto => gasto.id===gastoState.id?gastoState:gasto)
      setGastos(gastosEditados)
      setGastoEditar({})
    }else{
      gastoState.id=generarId();
      gastoState.fecha = Date.now();
      setGastos([... gastos, gastoState])
    }
        setAnimarModal(false)
        setTimeout(() => {
            setModal(false)
        }, 500);
  }
  
  return (
    <div className = {modal ? 'fijar' : ''}>
      <Header
        presupuesto = {presupuesto}
        setPresupuesto = {setPresupuesto}
        isValidPresupuesto= {isValidPresupuesto}
        setIsValidPresupuesto= {setIsValidPresupuesto}
        gastos= {gastos}
      />
      
      {isValidPresupuesto && (
        <>
          <main>
            <ListadoGastos
              gastos ={gastos}
              setGastos = {setGastos}
              setGastoEditar = {setGastoEditar}
            />
          </main>
          <div className='nuevo-gasto'>
            <img
              src={IconoNuevoGasto}
              alt="icono nuevo gasto"
              onClick={handelNuevoGasto} />
              
          </div>
        </>
        )
      }
      {modal&& <Modal
        setModal = {setModal}
        animarModal = {animarModal}
        setAnimarModal ={setAnimarModal}
        guardarGasto = {guardarGasto}
        gastoEditar = {gastoEditar}
        setGastoEditar = {setGastoEditar}
      />}
      
    </div>
  )
}

export default App
