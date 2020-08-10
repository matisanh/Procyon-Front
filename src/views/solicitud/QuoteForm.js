import React from "react";
import Paper from "@material-ui/core/Paper";
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
  FormHelperText
} from "@material-ui/core/";
export class QuoteForm extends React.Component {
  state = {
    id: this.props.id,
    tipo_recurso: this.props.tipo_recurso,
    id_paciente: this.props.id_paciente,
    tipo_procedimiento: this.props.tipo_procedimiento,
    id_solicitante: this.props.id_solicitante
  };

  render() {
    console.log(this.props.errorMessage);
    const { classes } = this.props;

    return (
      <React.Fragment>
        <Typography variant="h5" style={{marginBottom: 1 + 'em'}} align="center">
          Para generar una solicitud, complete los siguientes campos.

        </Typography>
        <Grid container spacing={2}>

          <Grid item >
           <InputLabel id="demo-mutiple-checkbox-label">Tipo Recurso</InputLabel>
            <Select
              error={!!this.props.errorMessage.tipo_recurso}
              required
              id="tipo_recurso"
              name="tipo_recurso"
              label="Tipo Recurso"
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
          </Grid>
          <Grid item >
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
          </Grid>
          <Grid item >
          <InputLabel id="demo-mutiple-checkbox-label">Tipo de Procedimiento</InputLabel>
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
          </Grid>
          <Grid item >
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
             
          </Grid>

          <Grid item>
          <Button
              variant="contained" 
              color="primary" 
              onClick={e => this.onSubmit(e)}>
              Generar
            </Button>
          </Grid>
          
        </Grid>
      </React.Fragment>
    );
  }
}
