import axios from 'axios'
import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
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

const apiURL= 'https://procyon.matisanh.cl/horarios'

const useStyles = withStyles((theme) => ({
	head: {
		backgroundColor: "black",
		color: "white",
	  },
	  body: {
		fontSize: 14,
	  },
	table: {
		minWidth: 650,
	},
}))(Table);

const StyledTableCell = withStyles((theme) => ({
	head: {
	  fontSize: 16,
	  fontWeight: 600,
	},
	
	body: {
	  fontSize: 14,
	},
  }))(TableCell);

  const classes = useStyles;

export default class BloquesHorarios extends React.Component {
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
	
  

  render(){
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="customized table" >
        <TableHead>
          <TableRow>
            <StyledTableCell>ID Bloque</StyledTableCell>
            <StyledTableCell >Hora</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {this.state.data.map((data) => (
            <TableRow key={data.id}>
              <StyledTableCell component="th" scope="row">
                {data.bloque}
              </StyledTableCell>

              <StyledTableCell >{data.hora}</StyledTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
}