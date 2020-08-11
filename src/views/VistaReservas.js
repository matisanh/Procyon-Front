import React, {useState} from 'react';
import '../App.css';
import Calendario from './reservas/Calendario'
import BotonReservas from '../components/BotonReservas'

export default function VistaReservas() {
  return (
  	<div classname='App-background' align='center'>
  		<BotonReservas/>
    	<h1>Reservas</h1>
    	<Calendario/>
    </div>
  );
}
