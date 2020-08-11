import React from 'react';
import '../App.css';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Home from './Home'
import VistaSolicitud from '../views/VistaSolicitud'
import VistaHome from '../views/VistaHome'
import VistaReservas from '../views/VistaReservas'
import CrearSolicitud from '../views/solicitud/CrearSolicitud'
import CrearReservas from '../views/reservas/CrearReservas'
import EditarSolicitud from '../views/solicitud/EditarSolicitud'
import ListarSolicitud from '../views/solicitud/ListarSolicitud'
import ListarReservas from '../views/reservas/ListarReservas'
import VistaHorario from '../views/VistaHorario'
import VistaBeta from '../views/VistaBeta'

export default function Rutas(){
	return(
		<BrowserRouter>
      <Switch>
        <React.Fragment>
          <Route path='/'>
            <Home/>
          </Route>
          <Route path='/home'>
            <VistaHome/>
          </Route>
          <Route path='/solicitudes'>
            <VistaSolicitud/>
          </Route>
          <Route path='/solicitudes/crear'>
            <CrearSolicitud/>
          </Route>
          <Route path='/solicitudes/editar'>
            <EditarSolicitud/>
          </Route>
          <Route path='/solicitudes/listar'>
            <ListarSolicitud/>
          </Route>
          <Route path='/reservas'>
            <VistaReservas/>
          </Route>
          <Route path='/reservas/crear'>
            <CrearReservas/>
          </Route>
          <Route path='/reservas/listar'>
            <ListarReservas/>
          </Route>
          <Route path='/beta'>
            <VistaBeta/>
          </Route>
          <Route path='/horarios'>
            <VistaHorario/>
          </Route>
        </React.Fragment>
      </Switch>
    </BrowserRouter>
		);
}