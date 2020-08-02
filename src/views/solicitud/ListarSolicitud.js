import React from 'react';
import '../../App.css';
import BotonSolicitud from '../../components/BotonSolicitud'
import TablaSolicitud from '../../components/TablaSolicitud'

export default function ListarSolicitud() {
  return (
  	  <div className="App">
  	  	<h1>Listar</h1>
  	  	<TablaSolicitud/>
  	  </div>
  );
}