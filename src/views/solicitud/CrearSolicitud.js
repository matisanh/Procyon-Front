import React from "react";
import { QuoteForm } from "./QuoteForm";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Paper, Typography, Button } from "@material-ui/core";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary
    }
  })
);
export default class CrearSolicitud extends React.Component {
  state = {
    activeStep: 0,
    tipo_recurso: "",
    id_paciente: "",
    tipo_procedimiento: "",
    id_solicitante: "",
    labelWidth: 0,
    error: false,
    errorMessage: {}
  };

  getStepContent = step => {
    switch (step) {
      case 0:
        return (
          <div>
            <QuoteForm
              {...this.state}
              {...this.state.value}
              handleChange={this.handleChange}
            />
          </div>
        );
      case 1:
        return (
          <div>Solicitud Creada</div>
        );
      default:
        throw new Error("Unknown step");
    }
  };

  
  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1,
      tipo_recurso: "",
      id_paciente: "",
      tipo_procedimiento: "",
      id_solicitante: "",
      id: ""
    }));
  };

  handleReset = () => {
    this.setState({
      activeStep: 0
    });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    const { classes } = this.props;
    const { activeStep } = this.state;
    const steps = ["Pick Up Address", "Select Your Vehicle"];

    return (
      <React.Fragment>
        {/* <CssBaseline /> */}
        <main>
          <Paper>
            <React.Fragment>
              {activeStep === steps.length ? (
                <React.Fragment>
                  <Typography variant="h5" gutterBottom>
                    Thank you for your interest!
                  </Typography>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  {this.getStepContent(activeStep)}
                  <div>
                    {activeStep !== 0 && (
                      <Button onClick={this.handleBack}>Back</Button>
                    )}
                  </div>
                </React.Fragment>
              )}
            </React.Fragment>
          </Paper>
        </main>
      </React.Fragment>
    );
  }
}