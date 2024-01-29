export default function Articulos({articulos, filterText}){
 
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
                    {articulos.filter(element=> element.nombre.toLowerCase().includes(filterText.toLowerCase())).map((element, index) =>                      
                        <tr key={index}>
                            <td>{element.nombre}</td>
                            <td>{element.precio}</td>
                            <td>{element.unidades}</td>
                            <td><button>Comprar</button></td>
                        </tr>                       
                    )}
                </tbody>
            </table> 
        </div>      
    )
}