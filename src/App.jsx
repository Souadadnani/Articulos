import './App.css'
import Cesta from './componentes/Cesta';
import ArticulosDisponibles from './componentes/ArticulosDisponibles';
import { useState, useEffect } from 'react';
import getArticulos from './services/getArticulos';

function App(){

  const [filterText, setFilterText] = useState('');
  const [articulosDisponibles, setArticulosDisponibles] = useState([]);
  const [articulosCesta, setArticulosCesta] = useState([]);

  useEffect(()=>{
    getArticulos("articulos", setArticulosDisponibles);
  }, [filterText]);
  
    return(
      <>
        <Cesta articulosCesta={articulosCesta} setArticulosCesta={setArticulosCesta}/> 
        <ArticulosDisponibles filterText={filterText} setFilterText={setFilterText} useEffect={useEffect} articulosDisponibles={articulosDisponibles} setArticulosCesta={setArticulosCesta} setArticulosDisponibles={setArticulosDisponibles}/>
      </>
    )
}


export default App
