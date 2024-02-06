import './App.css'
import Cesta from './componentes/Cesta';
import BarraBusqueda from "./componentes/BarraBusqueda";
import ArticulosDisponibles from './componentes/ArticulosDisponibles';
import { useState, useEffect } from 'react';


function App(){

  const [filterText, setFilterText] = useState('');
  const [articulosDisponibles, setArticulosDisponibles] = useState([]);
  const [articulosCesta, setArticulosCesta] = useState([]);

  useEffect(()=>{
    const URL_SERVER = "http://184.73.248.64:3000/";

    fetch(`${URL_SERVER}articulos?nombre_like=${filterText}`)
        .then(response=>{
            if(response.ok){
                return response.json();
            }else{throw new Error(`Error en la solicitud ${response.status}`)}
        })
        .then(articulos=>{
            setArticulosDisponibles(articulos);
        })
        .catch(error=>{
            console.error(error);
        })
  }, [filterText]);
  
    return(
      <>
        <Cesta articulosCesta={articulosCesta} setArticulosCesta={setArticulosCesta}/> 
        <BarraBusqueda filterText={filterText} setFilterText={setFilterText}/>
        <ArticulosDisponibles filterText={filterText} setFilterText={setFilterText} articulosCesta={articulosCesta} useEffect={useEffect} articulosDisponibles={articulosDisponibles} setArticulosCesta={setArticulosCesta} setArticulosDisponibles={setArticulosDisponibles}/>
      </>
    )
}


export default App
