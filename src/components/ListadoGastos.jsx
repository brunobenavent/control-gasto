import Gasto from "./Gasto"
const ListadoGastos = ({gastos, setGastoEditar,setGastos, gastosFiltrados, filtro }) => {
  return (
    <div className="listado-gastos contenedor">
      
        {
            filtro ? (
                <>
                    <h2> {gastosFiltrados.length? "Gastos": "No hay gastos aún en esta categoría"} </h2>
                    {gastosFiltrados.map(gasto =>(
                        <Gasto
                            gasto = {gasto}
                            gastos = {gastos}
                            setGastos = {setGastos}
                            setGastoEditar = {setGastoEditar}
                            key={gasto.id}
                        />
                    ))}
                </>
            ) : (
                <>
                   <h2>  {gastos.length? "Gastos": "No hay gastos aún"} </h2>
                    {gastos.map(gasto =>(
                        <Gasto
                            gasto = {gasto}
                            gastos = {gastos}
                            setGastos = {setGastos}
                            setGastoEditar = {setGastoEditar}
                            key={gasto.id}
                        />
                    ))}
                </>
            )
        }
    </div>
  )
}

export default ListadoGastos
