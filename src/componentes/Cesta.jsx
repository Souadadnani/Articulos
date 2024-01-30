export default function Cesta({articulosCesta}){

    return(      
       <div>
            <ul>
                {articulosCesta.map(element =>                                     
                    <li key={element.codigo}>Producto: {element.nombre}, precio: {element.precio}</li>                                   
                )}
            </ul>                 
       </div>   
    )
}