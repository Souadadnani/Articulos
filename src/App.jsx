import './App.css'
import Cesta from './componentes/Cesta';
import ArticulosDisponibles from './componentes/ArticulosDisponibles';

function App(){

    const ARTICULOS = [
      { nombre: "Laptop", precio: 800, codigo: "LPT001", unidades: 10 },
      { nombre: "Mouse", precio: 20, codigo: "MS001", unidades: 50 },
      { nombre: "Teclado", precio: 50, codigo: "TK001", unidades: 30 },
      { nombre: "Monitor", precio: 500, codigo: "MN001", unidades: 20 },
      { nombre: "Impresora", precio: 600, codigo: "IP001", unidades: 15 },
    ];

    return(
      <>
        <Cesta/> 
        <ArticulosDisponibles productos={ARTICULOS}/>
      </>
    )
}


export default App
