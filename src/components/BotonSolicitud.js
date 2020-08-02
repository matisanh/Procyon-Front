import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import FavoriteIcon from '@material-ui/icons/Favorite';
import NavigationIcon from '@material-ui/icons/Navigation';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));


export default function FloatingActionButtons() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Fab variant="extended" color="secondary" aria-label="add" size="medium" href="/solicitudes/crear">
        <AddIcon /> 
        Crear
      </Fab>
      <Fab variant="extended" color="secondary" size="medium" href="/solicitudes/listar">
        <NavigationIcon className={classes.extendedIcon} />
        Listar
      </Fab>
    </div>
  );
}