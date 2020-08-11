import axios from 'axios'
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';

const apiURL= 'https://procyon.matisanh.cl/reservas'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});



export default class TablaReservas extends React.Component {
  state={
    data:[],
    recurso:{}
  };
  componentDidMount(){
    axios.get(apiURL).then(res=>{
        console.log(res);
        this.setState({data: res.data});
      }); 
    
    }
  //const classes = useStyles();
  

  render(){
  return (
    <TableContainer component={Paper}>
      <Table className={useStyles.table} size="small" aria-label="customized table" >
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell >ID Solicitud</TableCell>
            <TableCell >ID Paciente</TableCell>
            <TableCell >Tipo de Recurso</TableCell>
            <TableCell >ID Recurso</TableCell>
            <TableCell >Tipo de Procedimiento</TableCell>
            <TableCell >Fecha Reserva</TableCell>
            <TableCell >Bloque Reservado</TableCell>
            <TableCell >N° Bloques</TableCell>
            <TableCell >Fecha de peticion</TableCell>
            <TableCell >Estado</TableCell>
            <TableCell >Bloques Reservados</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {this.state.data.map((data) => (
            <TableRow key={data.id}>
              <TableCell component="th" scope="row">
                {data.id}
              </TableCell>
              <TableCell >{data.idSolicitud}</TableCell>
              <TableCell >{data.idPaciente}</TableCell>
              <TableCell >{data.resourceType}</TableCell>
              <TableCell >{data.resourseID}</TableCell>
              <TableCell >{data.procedureType}</TableCell>
              <TableCell >{data.dateReserved}</TableCell>
              <TableCell >{data.reservedBlock}</TableCell>
              <TableCell >{data.nReservedBlocks}</TableCell>
              <TableCell >{data.dateLog}</TableCell>
              <TableCell >{data.status}</TableCell>
              <TableCell >{data.blocksReserved}</TableCell>
              <Fab variant="round" color="secondary" aria-label="edit" size="small" href="/solicitudes/editar">
                <EditIcon />
              </Fab>

              <Fab color="primary" aria-label="validar" size="small" href="/reservas/crear">
                <AddIcon />
              </Fab>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
}