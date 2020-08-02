import React, {useState} from 'react';
import '../App.css';
import Calendario from './reservas/Calendario'

export default function VistaReservas() {
  return (
  	<div classname='App-background' align='center'>
    	<h1>Reservas</h1>
    	<Calendario/>
    </div>
  );
}
