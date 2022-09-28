import { useState, useEffect } from 'react'
import Header from './components/Header'
import Modal from './components/Modal'
import { generarId } from './helpers'
import IconoNuevoGasto from './img/nuevo-gasto.svg'
import ListadoGastos from './components/ListadoGastos'
import Filtros from './components/Filtros'


const App = () => {
  const [ presupuesto, setPresupuesto] = useState(
    localStorage.getItem('presupuesto') || 0
  )
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false);
  const [modal, setModal] = useState(false)
  const [animarModal, setAnimarModal] = useState(false)
  const [gastos, setGastos] = useState(
    localStorage.getItem('gastos') ? JSON.parse(localStorage.getItem('gastos')) : []
  )
  const [gastoEditar, setGastoEditar] = useState({})
  const [filtro, setFiltro] =useState('')
  const [gastosFiltrados, setGastosFiltrados] =useState([])

  useEffect(()=> {
    if(Object.keys(gastoEditar).length>0){
      setModal(true)
      setTimeout(() => {
      setAnimarModal(true)
    }, 500);
    }
  }, [gastoEditar])
  
  useEffect(()=> {
    localStorage.setItem('presupuesto', presupuesto || 0)
  }, [presupuesto])

  useEffect(()=> {
    localStorage.setItem('gastos', JSON.stringify(gastos) || [])
  }, [gastos])

  useEffect(()=> {
    const presupuestoLS = localStorage.getItem ('presupuesto') || 0
    if(presupuestoLS>0){
      setIsValidPresupuesto(true)
    }
  }, [])

  useEffect(()=>{
    if(filtro){
      const gastosFiltrados = gastos.filter(gasto => gasto.categoria === filtro)
      setGastosFiltrados(gastosFiltrados)
    }
  }, [filtro])

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
        setGastos = {setGastos}
      />
      
      {isValidPresupuesto && (
        <>
          <main>
            <Filtros
              filtro = {filtro}
              setFiltro = {setFiltro}
            />
            <ListadoGastos
              gastos ={gastos}
              setGastos = {setGastos}
              setGastoEditar = {setGastoEditar}
              gastosFiltrados= {gastosFiltrados}
              filtro = {filtro}
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
