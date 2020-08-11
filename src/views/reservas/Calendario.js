import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject } from '@syncfusion/ej2-react-schedule';
export default class Calendario extends React.Component {
	
    render() {
        return <ScheduleComponent width='75%' height='550px'>
        <link href="https://cdn.syncfusion.com/ej2/material.css" rel="stylesheet"/>
        <Inject services={[Day, Week, WorkWeek, Month, Agenda]}/>
    </ScheduleComponent>;
    }
}
