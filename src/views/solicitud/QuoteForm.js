import React from "react";
import Paper from "@material-ui/core/Paper";
import DateFnsUtils from '@date-io/date-fns';
import {
  Grid,
  Typography,
  TextField,
  FormControl,
  Button,
  Select,
  Input,
  InputLabel,
  MenuItem,
  FormHelperText,
  makeStyles
} from "@material-ui/core/";

import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

import axios from "axios"

export class QuoteForm extends React.Component {
  state = {
    id: this.props.id,
    resourceType: this.props.resourceType,
    idPatient: this.props.idPatient,
    procedureType: this.props.procedureType,
    idRequester: this.props.idRequester
  };

  handleNext = () => {
    let isError = false;
    console.log(this.props);


    if (this.props.tipo_recurso === "") {
      isError = true;
      this.setState(prev => ({
        ...prev,
        error: true,
        errorMessage: {
          ...prev.errorMessage,
          tipo_recurso: "Ingrese tipo de recurso correcto"
        }
      }));
    }
    if (this.props.id_paciente.length < 2) {
      isError = true;
      this.setState(prev => ({
        ...prev,
        error: true,
        errorMessage: {
          ...prev.errorMessage,
          id_paciente: "Ingrese un ID de paciente correcto"
        }
      }));
    }
    if (this.props.tipo_procedimiento.length < 2) {
      isError = true;
      this.setState(prev => ({
        ...prev,
        error: true,
        errorMessage: {
          ...prev.errorMessage,
          tipo_procedimiento: "Ingrese un tipo de procedimiento correcto"
        }
      }));
    }
    if (this.props.id_solicitante.length < 2) {
      isError = true;
      this.setState(prev => ({
        ...prev,
        error: true,
        errorMessage: {
          ...prev.errorMessage,
          id_solicitante: "Ingrese un ID de solicitante correcto"
        }
      }));
    }
    if (!isError) {
      //add else if for validating other fields (if any)
      this.setState(prevState => ({
        activeStep: prevState.activeStep + 1,
        error: false,
        errorMessage: {}
      }));
    }
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  
  render() {
    console.log(this.props.errorMessage);
    const { classes } = this.props;


    return (

      
      
      <React.Fragment>
        <Typography variant="h5" style={{marginBottom: 1 + 'em'}} align="center">
          Para generar una solicitud, complete los siguientes campos.

        </Typography>
        <div>
          <FormControl style={{minWidth: 120, margin: 1 + 'em'}}>
           <InputLabel id="demo-mutiple-checkbox-label">Tipo Recurso</InputLabel>
            <Select
              error={!!this.props.errorMessage.tipo_recurso}
              required
              id="resourceType"
              name="resourceType"
              label="Tipo Recurso"
              labelId="demo-mutiple-checkbox-label"
              fullWidth
              value={this.props.tipo_recurso}
              onChange={this.props.handleChange}
              helperText={
                this.props.errorMessage.tipo_recurso &&
                this.props.errorMessage.tipo_recurso
              }>
                <MenuItem value="0">
                  <em>N.A.</em>
                </MenuItem>
                <MenuItem value={1}>Pabellón</MenuItem>
                <MenuItem value={2}>Sillón</MenuItem>
                <MenuItem value={3}>Personal</MenuItem>
            </Select>
          </FormControl>
          <FormControl style={{minWidth: 120, margin: 1 + 'em'}}>
            <TextField
              error={!!this.props.errorMessage.id_paciente}
              required
              id="idPatient"
              name="idPatient"
              label="ID Paciente"
              fullWidth
              autoComplete="billing postal-code"
              value={this.props.id_paciente}
              onChange={this.props.handleChange}
              helperText={
                this.props.errorMessage.id_paciente &&
                this.props.errorMessage.id_paciente
              }
            />
          </FormControl>
          <FormControl style={{minWidth: 120, margin: 1 + 'em'}}>
          <InputLabel id="demo-mutiple-checkbox-label">Procedimiento</InputLabel>
            <Select
              labelId="demo-mutiple-checkbox-label"
              error={!!this.props.errorMessage.tipo_procedimiento}
              required
              id="procedureType"
              name="procedureType"
              label="Tipo de Procedimiento"
              fullWidth
              autoComplete="billing postal-code"
              value={this.props.tipo_procedimiento}
              onChange={this.props.handleChange}
              helperText={
                this.props.errorMessage.tipo_procedimiento &&
                this.props.errorMessage.tipo_procedimiento
              }
              >
                <MenuItem value={0}>Urgencia</MenuItem>
                <MenuItem value={1}>Cirugía</MenuItem>
                <MenuItem value={2}>Consulta</MenuItem>
                <MenuItem value={3}>Odontología</MenuItem>
            </Select>
          </FormControl>
          <FormControl style={{minWidth: 120, margin: 1 + 'em'}}>
            <TextField
                error={!!this.props.errorMessage.id_solicitante}
                required
                id="dateReserva"
                name="dateReserva"
                label="Fecha Reserva Solicitante"
                fullWidth
                value={this.props.dateReserva}
                onChange={this.props.handleChange}
                helperText={
                  this.props.errorMessage.id_solicitante &&
                  this.props.errorMessage.id_solicitante
                }
              />
          </FormControl>
          <FormControl style={{minWidth: 120, margin: 1 + 'em'}}>
            <TextField
              error={!!this.props.errorMessage.id_solicitante}
              required
              id="idRequester"
              name="idRequester"
              label="ID Solicitante"
              fullWidth
              autoComplete="billing postal-code"
              value={this.props.id_solicitante}
              onChange={this.props.handleChange}
              helperText={
                this.props.errorMessage.id_solicitante &&
                this.props.errorMessage.id_solicitante
              }
            />      
             
          </FormControl>

          <FormControl style={{minWidth: 120}}>
          <Button
              variant="contained" 
              color="primary" 
              onClick={this.handleNext.bind(this)}>
              Generar
            </Button>
          </FormControl>
          </div>
      </React.Fragment>


    );
  }
}
