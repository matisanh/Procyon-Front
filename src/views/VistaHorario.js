import React from 'react';
import '../App.css';
import BloquesHorarios from '../components/BloquesHorarios'
import BarraNavegacion from '../components/BarraNavegacion'

export default function VistaHorario(){
	return(
		<div className="VistaHorario" align='center'>
		  <BloquesHorarios/>
	    </div>
		);
}