export default function Articulos({articulosDisponibles, filterText, setArticulosCesta, setArticulosDisponibles,}){

 const agregarArticulo = (articulo)=>{
    const articuloCesta ={
        nombre: articulo.nombre,
        precio: articulo.precio,
    }
    setArticulosCesta((previo)=>[...previo, articuloCesta]);
    setArticulosDisponibles(articulosDisponibles.map(art=>art.codigo === articulo.codigo ? {...art, unidades: art.unidades-1}: art));
 }
    return(   
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Unidades</th>
                        <th>Accion</th>
                    </tr>
                </thead>
                <tbody>
                    {articulosDisponibles.filter(element=> element.nombre.toLowerCase().includes(filterText.toLowerCase())).map(element =>                      
                        <tr key={element.codigo}>
                            <td>{element.nombre}</td>
                            <td>{element.precio}</td>
                            <td>{element.unidades}</td>
                            <td><button onClick={()=>agregarArticulo(element)}>Comprar</button></td>
                        </tr>                       
                    )}
                </tbody>
            </table> 
        </div>      
    )
}