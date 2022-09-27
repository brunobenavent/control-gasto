import Gasto from "./Gasto"
const ListadoGastos = ({gastos, setGastoEditar,setGastos }) => {
  return (
    <div className="listado-gastos contenedor">
      <h2> {gastos.length? "Gastos": "No hay gastos aún"} </h2>
        {gastos.map(gasto =>(
            <Gasto
                gasto = {gasto}
                gastos = {gastos}
                setGastos = {setGastos}
                setGastoEditar = {setGastoEditar}
                key={gasto.id}
            />
        ))}
    </div>
  )
}

export default ListadoGastos
