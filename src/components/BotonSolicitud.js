import React from 'react'
import Button from '@material-ui/core/Button';
import TablaSolicitud from './TablaSolicitud'

function BotonOn(props) {
  return (
    <button onClick={props.onClick}>
      Listar Solicitudes
    </button>
  );
}

function BotonOff(props) {
  return (
    <button onClick={props.onClick}>
      Esconder Solicitudes
    </button>
  );
}

class BotonSolicitud extends React.Component{
	state={
		esVisible: false
	};
	Visible(){
		this.setState({esVisible:true});
	}
	noVisible(){
		this.setState({esVisible:false});
	}
	render(){
		const visible = this.state.esVisible;
		let button; 
		if(visible){
			button = <BotonOff onClick={this.noVisible}/>;
		} else {
			button = <BotonOn onClick={this.Visible}/>;
		}
		return(
			<div>
				{button}
			</div>
			);
	}
}
export default BotonSolicitud;