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

const apiURL= 'https://procyon.matisanh.cl/solicitudes'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});



export default class TablaSolicitud extends React.Component {
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
            <TableCell >Tipo de Recurso</TableCell>
            <TableCell >ID Paciente</TableCell>
            <TableCell >Tipo de Procedimiento</TableCell>
            <TableCell >ID Solicitante</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {this.state.data.map((data) => (
            <TableRow key={data.id}>
              <TableCell component="th" scope="row">
                {data.id}
              </TableCell>
              <TableCell >{data.resourceType==3 ? (<p>HEY</p>) : (data.resourceType==5 ?(<p>HoY</p>):(<p>{data.resourceType}</p>))}</TableCell>
              <TableCell >{data.idPatient}</TableCell>
              <TableCell >{data.procedureType}</TableCell>
              <TableCell >{data.idRequester}</TableCell>
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