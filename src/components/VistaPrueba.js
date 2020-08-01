import React, {useState} from 'react';
import '../App.css';
import TablaSolicitud from './TablaSolicitud'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function VistaPrueba() {
  const [value, updateValue]=useState(["PRUEBA"])
  return (
    <div className="App">
	    <section className="Appbar">
	    	<div className={useStyles.root}>
		      <AppBar position="static">
		        <Toolbar>
		          <IconButton edge="start" className={useStyles.menuButton} color="inherit" aria-label="menu">
		            <Button>WENA</Button>
		          </IconButton>
		          <Typography variant="h6" className={useStyles.title}>
		            News
		          </Typography>
		          <Button color="inherit">Login</Button>
		        </Toolbar>
		      </AppBar>
		    </div>
	    </section>
      <section className="App-background">
        
        <h1>{value}</h1>
        <TablaSolicitud/>
      </section>
      
    </div>
  );
}


export default VistaPrueba;
