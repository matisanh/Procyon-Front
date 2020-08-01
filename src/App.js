import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
//import Lista from './components/Lista'
//import TablaSolicitud from './components/TablaSolicitud'
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import VistaPrueba from './components/VistaPrueba'
//import BotonSolicitud from './components/BotonSolicitud'

function App() {
  const [value, updateValue]=useState(["Hola, Bienvenido a SIGO, que deseas ver:"])
  return (
    <div className="App">
      <section className="App-background">
        
        <h1>{value}</h1>

        <BrowserRouter>
          <React.Fragment>
            <Route path='/vistaprueba' component={VistaPrueba}/>
            <ButtonGroup size="large" color="primary" href="#contained-buttons" aria-label="large outlined primary button group">
              <Button>
                <Link to='/vistaprueba'>One</Link>
              </Button>
              <Button>Two</Button>
              <Button>Three</Button>
            </ButtonGroup>
          </React.Fragment>
        </BrowserRouter>


        
        
        <Button variant="contained">Solicitudes</Button>

      </section>
      <section>
        
      </section>
      
    </div>
  );
}


export default App;
