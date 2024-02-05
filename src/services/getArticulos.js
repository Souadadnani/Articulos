export default function getArticulos(data, setArticulosDisponobles){
    const URL_SERVER = "http://184.73.248.64:3000/";

    fetch(`${URL_SERVER}${data}`)
        .then(response=>{
            if(response.ok){
                return response.json();
            }else{throw new Error(`Error en la solicitud ${response.status}`)}
        })
        .then(articulos=>{
            setArticulosDisponobles(articulos);
        })
        .catch(error=>{
            console.error(error);
        })
}