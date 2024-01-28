export default function BarraBusqueda({articulos, filterText, setFilterText}){
    
    const articulosBuscados = articulos.filter(articulo=>{
        articulo.nombre.toLowerCase().includes(filterText.toLowerCase());
    });

    return( 
       <div>
            <input type="text" name="buscar" value={filterText} placeholder="Buscar" onChange={(e)=> setFilterText(e.target.value)}/>
            <ul>
                {articulosBuscados.map((articulo, index)=>{
                    return(
                    <li key={index}>{articulo.nombre}, {articulo.precio}, {articulo.unidades}</li>
                )})}
            </ul>
       </div>
        
    )

}