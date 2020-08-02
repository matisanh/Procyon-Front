import React from 'react';
import '../App.css';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Home from './Home'
import VistaSolicitud from '../views/VistaSolicitud'
import VistaHome from '../views/VistaHome'
import VistaReservas from '../views/VistaReservas'
import CrearSolicitud from '../views/solicitud/CrearSolicitud'
import EditarSolicitud from '../views/solicitud/EditarSolicitud'
import ListarSolicitud from '../views/solicitud/ListarSolicitud'

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
        </React.Fragment>
      </Switch>
    </BrowserRouter>
		);
}