import React from "react";
import Paper from "@material-ui/core/Paper";
import DateFnsUtils from '@date-io/date-fns';
import axios from 'axios'
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


const URL = 'https://procyon.matisanh.cl/reservas';

export class QuoteForm extends React.Component {
  state = {
    id: this.props.id,
    tipo_recurso: this.props.tipo_recurso,
    id_paciente: this.props.id_paciente,
    tipo_procedimiento: this.props.tipo_procedimiento,
    id_solicitante: this.props.id_solicitante
  };

  

  handleNext = () => {
    let isError = false;
    const formData = {
      resourceType: this.props.tipo_recurso,
      idPatient: this.props.id_paciente,
      procedureType: this.props.tipo_procedimiento,
      idRequester: this.props.id_solicitante
    };

    axios.post(URL, formData )
      .then(res => {
        console.log(res);
        console.log(res.data);
        window.location.replace("/solicitudes/listar");
      })

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
          Para generar una reserva, complete los siguientes campos.

        </Typography>
        <div>
          <FormControl style={{minWidth: 120, margin: 1 + 'em'}}>
           <InputLabel id="demo-mutiple-checkbox-label">Tipo Recurso</InputLabel>
            <Select
              error={!!this.props.errorMessage.tipo_recurso}
              required
              id="tipo_recurso"
              name="tipo_recurso"
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
              id="id_paciente"
              name="id_paciente"
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
              id="tipo_procedimiento"
              name="tipo_procedimiento"
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
                id="date_reserva"
                name="date_reserva"
                label="Fecha Reserva Solicitante"
                fullWidth
                value={this.props.date_reserva}
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
              id="id_solicitante"
              name="id_solicitante"
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
