import React from 'react';
import '../App.css';
import TablaSolicitud from '../components/TablaSolicitud'
import BarraNavegacion from '../components/BarraNavegacion'
import BotonSolicitud from '../components/BotonSolicitud'

export default function VistaSolicitud(){
	return(
		<div className="VistaSolicitud" align='center'>
		  <BotonSolicitud/>
	    </div>
		);
}