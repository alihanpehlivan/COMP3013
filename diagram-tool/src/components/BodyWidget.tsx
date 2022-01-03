import * as React from 'react';
import * as _ from 'lodash';
import { Application } from '../Application';
import { DefaultNodeModel } from '@projectstorm/react-diagrams';
import { CanvasWidget } from '@projectstorm/react-canvas-core';

import LeftMenu from './LeftMenu'
import { DiagramCanvasWidget } from './DiagramCanvasWidget';

import Grid from '@mui/material/Grid';

export interface BodyWidgetProps {
	app: Application;
}

function clickMe(name, colour){
	alert("Hello World");
	alert(name);
	alert(colour)
}

export class BodyWidget extends React.Component<BodyWidgetProps> {
	render() {
		return (
				<Grid container component="main" sx={{ height: '100vh' }}>

          {/* Left Menu */}
					<Grid item xs={2}>
            <LeftMenu />
					</Grid>

          {/* Right Drawing Canvas */}
					<Grid item xs={10}
          
						onDrop={(event) => {
							var data = JSON.parse(event.dataTransfer.getData('storm-diagram-node'));
							var nodesCount = _.keys(this.props.app.getDiagramEngine().getModel().getNodes()).length;

							var node: DefaultNodeModel = null;

							if (data.type === 'in') 
							{
								//var name = 'Node';
								//var colour = 'rgb(192,255,0)';
								var defaultPort = 'Default';
								var port = 'CLASS';
								var port2 = 'ACTORS';
								var port3 = 'DELETE';
								node = new DefaultNodeModel('Node ' + (nodesCount + 1), 'rgb(192,255,0)');
								node.addInPort(defaultPort);
								node.addInPort(port);
								node.addInPort(port2);
								node.addInPort(port3);

								//clickMe(name, colour);
							} 
							else if(data.type === 'out') 
							{
								node = new DefaultNodeModel('Node ' + (nodesCount + 1), 'rgb(0,192,255)');
								node.addOutPort('Out');
							}
							else if (data.type === 'A')
							{
								node = new DefaultNodeModel('Node ' + (nodesCount + 1), 'rgb(255,0,0)');
								node.addInPort('A');
							}
							else if(data.type === 'E')
							{
								node = new DefaultNodeModel('Node ' + (nodesCount + 1), 'rgb(255,255,0)');
								node.addOutPort('E');
							}
							else if(data.type === 'V')
							{
								node = new DefaultNodeModel('Node ' + (nodesCount + 1), 'rgb(255,127,0)');
								node.addInPort('V');
							}else{
								node = new DefaultNodeModel('Node ' + (nodesCount + 1), 'rgb(160,32,240)');
								node.addOutPort('S');
							}

							var point = this.props.app.getDiagramEngine().getRelativeMousePoint(event);
							node.setPosition(point);
							this.props.app.getDiagramEngine().getModel().addNode(node);
							this.forceUpdate();

						}}

						onDragOver={(event) => {
							event.preventDefault();
						}}>

						<DiagramCanvasWidget>
							<CanvasWidget engine={this.props.app.getDiagramEngine()} />
						</DiagramCanvasWidget>

					</Grid>
				</Grid>
		);
	}
}
