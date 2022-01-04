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

							//*** Here is where nodes dragged from Tray Item widget get their colours set ***/
							if (data.type === 'in') {
								node = new DefaultNodeModel('Node ' + (nodesCount + 1), 'rgb(0,255,0)');
								node.addInPort('In');
							} 
							if(data.type === 'out') {
								node = new DefaultNodeModel('Node ' + (nodesCount + 1), 'rgb(0,0,255)');
								node.addOutPort('Out');
							}
							if(data.type === 'red'){
								node = new DefaultNodeModel('Node ' + (nodesCount + 1), 'rgb(255,0,0)');
								node.addOutPort('Out');
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
