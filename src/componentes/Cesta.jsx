export default function Cesta({articulos}){

    return(
        <>
        <div>
            <table>
                {articulos.map((element, index) => {
                    return(
                        <tr key={index}>
                            <td>{element.nombre}</td>
                            <td>{element.precio}</td>
                            <td>{element.codigo}</td>
                        </tr>
                )})}             
            </table>
        </div> 
        </>
    

      
    )
}