import "./ListaOpciones.css"

//metodo map -> arreglo.map ( (equipo, index) => {
//    return <option></option>
//})
const ListaOpciones = (props) => {
    

    const manejarCambio = (evento) => {
        props.actualizarEquipo(evento.target.value)
    }

    return <div className="lista-opciones">
        <label>Equipos</label>
        <select value={props.valor} onChange={manejarCambio}>
            <option value="" disabled defaultValue="" hidden>Seleccionar equipo</option>
           {props.equipos.map( (equipo, index) =>  <option key={index} value={equipo}>{equipo}</option>)}
        </select>
    </div>
}

export default ListaOpciones