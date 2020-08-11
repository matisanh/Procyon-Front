import React from 'react'
import axios from 'axios'

const apiURL= 'https://procyon.matisanh.cl/solicitudes'

export default class Lista extends React.Component{
	state={
		data:[],
	};
	componentDidMount(){
		axios.get(apiURL).then(res=>{
				console.log(res);
				this.setState({data: res.data});
			});	
		}
	render(){
		return(
			<ul>
			{this.state.data.map(data=><li key={data.id}>{data.resourceType}</li>)}
			</ul>

		)
	}
}