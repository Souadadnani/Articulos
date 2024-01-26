import { useState } from "react"
import BarraBusqueda from "./BarraBusqueda";
import Articulos from "./Articulos";

export default function ArticulosDisponibles({articulos}){

    const [filterText, setFilterText] = useState('');
    return(
        <>
            <div>
                <BarraBusqueda/>
            </div>
            <div>
                <Articulos productos={articulos}/>
            </div>
        </>
    )

}