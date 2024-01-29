export default function BarraBusqueda({filterText, setFilterText}){

    return( 
       <div>
            <input type="text" name="buscar" value={filterText} placeholder="Buscar" onChange={e=> setFilterText(e.target.value)}/>
       </div>
        
    )

}