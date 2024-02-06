/* import { useState } from "react"
import BarraBusqueda from "./BarraBusqueda"; */
import Articulos from "./Articulos";

export default function ArticulosDisponibles({filterText, articulosDisponibles, setArticulosCesta, setArticulosDisponibles}){
 

    return(
        <>           
            <Articulos articulosDisponibles={articulosDisponibles} setArticulosCesta={setArticulosCesta} setArticulosDisponibles={setArticulosDisponibles} filterText={filterText} />           
        </>
    )

}