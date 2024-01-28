import { useState } from "react"
import BarraBusqueda from "./BarraBusqueda";
import Articulos from "./Articulos";

export default function ArticulosDisponibles({articulos}){

    const [filterText, setFilterText] = useState('');

    return(
        <>           
            <BarraBusqueda articulos={articulos} filterText={filterText} setFilterText={setFilterText}/>
            <Articulos articulos={articulos} filterText={filterText} setFilterText={setFilterText}/>           
        </>
    )

}