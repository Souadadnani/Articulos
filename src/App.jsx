import './App.css'
import Cesta from './componentes/Cesta';
import ArticulosDisponibles from './componentes/ArticulosDisponibles';

function App(){

  const ARTICULOS = [
    { nombre: "Laptop HP", precio: "$800", unidades: 15, codigo: "P001" },
    { nombre: "Teclado mecánico", precio: "$100", unidades: 30, codigo: "P002" },
    { nombre: "Monitor 24 pulgadas", precio: "$250", unidades: 20, codigo: "P003" },
    { nombre: "Mouse inalámbrico", precio: "$30", unidades: 50, codigo: "P004" },
    { nombre: "Disco duro externo 1TB", precio: "$70", unidades: 25, codigo: "P005" },
    { nombre: "Impresora láser", precio: "$150", unidades: 10, codigo: "P006" },
    { nombre: "Auriculares gaming", precio: "$80", unidades: 40, codigo: "P007" },
    { nombre: "Tarjeta gráfica NVIDIA", precio: "$400", unidades: 5, codigo: "P008" },
    { nombre: "Router Wi-Fi dual band", precio: "$60", unidades: 30, codigo: "P009" },
    { nombre: "Software antivirus", precio: "$50", unidades: 60, codigo: "P010" }
  ];

    return(
      <>
        <Cesta articulos={ARTICULOS}/> 
        <ArticulosDisponibles articulos={ARTICULOS}/>
      </>
    )
}


export default App
