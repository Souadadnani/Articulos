export default function Cesta({articulosCesta, setArticulosCesta, setArticulosDisponibles}){

    const eliminarArticulo = (articulo)=>{
        console.log(articulo);
        const nuevaCesta = articulosCesta.filter(item=> item.codigo !== articulo.codigo);
        setArticulosCesta(nuevaCesta);
        setArticulosDisponibles(articulosDisponibles.map(art=>art.codigo === articulo.codigo ? {...art, unidades: art.unidades-1}: art));
     }
    return(      
       <div>
            <h2>Cesta</h2> 
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Precio</th>
                    </tr>
                </thead>
                <tbody>
                    {articulosCesta.map((element, index) =>                      
                        <tr key={index}>
                            <td>{element.nombre}</td>
                            <td>{element.precio}</td>
                            <td><button onClick={()=>eliminarArticulo(element)}>Eliminar</button></td>
                        </tr>                      
                    )}                   
                </tbody> 
                <tfoot>
                    <tr>
                        <td>Total Cesta</td>
                        <td>{articulosCesta.reduce((acc, articulo) => acc + articulo.precio, 0)}</td>
                    </tr>
                </tfoot>
            </table>              
       </div>   
    )
}