import React, {useState} from 'react';
import '../App.css';
import TablaSolicitud from '../components/TablaSolicitud'
import BarraNavegacion from '../components/BarraNavegacion'

function VistaPrueba() {
  const [value, updateValue]=useState(["PRUEBA"])
  return (
    <div className="Prueba">
      <BarraNavegacion/>
      <h1>{value}</h1>
      <TablaSolicitud/>
      <section className="Prueba-background">
        
      </section>
      
    </div>
  );
}


export default VistaPrueba;
