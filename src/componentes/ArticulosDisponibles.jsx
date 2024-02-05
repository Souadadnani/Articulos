import { useState } from "react"
import BarraBusqueda from "./BarraBusqueda";
import Articulos from "./Articulos";

export default function ArticulosDisponibles({filterText, setFilterText, articulosDisponibles, setArticulosCesta, setArticulosDisponibles}){
 

    return(
        <>           
            <BarraBusqueda filterText={filterText} setFilterText={setFilterText}/>
            <Articulos articulosDisponibles={articulosDisponibles} setArticulosCesta={setArticulosCesta} setArticulosDisponibles={setArticulosDisponibles} filterText={filterText} />           
        </>
    )

}