import { useState } from "react"
import "./MIOrg.css"

const MIOrg = (props) => {

    //Estado - hooks
    //useState
    //const [nombreVariable,funcionActualiza]c= useState(valorInicial)

    //const [nombre,actualizarNombre] = useState("Alex")
    const [mostrar,actualizarMostrar] = useState(true)

    const manejarClick = () => {
        actualizarMostrar(!mostrar)

    }

    return <section className="orgSection">
        <h3 className="tittle">Mi organización </h3>
        <img src= "/add.png" alt="add" onClick={props.cambiarMostrar} />
    </section>
}

export default MIOrg