export default function Articulos({articulosDisponibles, articulosCesta, setArticulosCesta, setArticulosDisponibles,}){

 const agregarArticulo = (articulo)=>{
    const articuloCesta = {};
    articulosCesta.find(artCesta=>{
        if(artCesta){
            if(articulo.id === artCesta.id){
                artCesta.unidades += 1;
            }
        }else{
            articuloCesta ={
                id: articulo.id,
                nombre: articulo.nombre,
                precio: articulo.precio,
                unidades: 1
            }
        }
        
    })

    setArticulosCesta((previo)=>[...previo, articuloCesta]);
    setArticulosDisponibles(articulosDisponibles.map(art=>art.codigo === articulo.codigo ? {...art, unidades: art.unidades-1}: art));
 }
    return(   
        <div>
            <h2>Articulos Disponibles</h2>
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
                    {articulosDisponibles.map(element =>                      
                        <tr key={element.id}>
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