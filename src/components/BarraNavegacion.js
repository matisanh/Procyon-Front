import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

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

export default function BarraNavegacion() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar color='secondary' position="static">
        <Toolbar>
          <Typography align='left'variant="h5" className={classes.title}>
            Procyon-Projects
          </Typography>
          <Button color="inherit" href="/home">SIGO</Button>
          <Button color="inherit" href="/solicitudes">Solicitudes</Button>
          <Button color="inherit" href="/reservas">Reservas</Button>	
        </Toolbar>
      </AppBar>
    </div>
  );
}