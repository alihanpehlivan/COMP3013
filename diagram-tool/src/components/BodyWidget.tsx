import * as React from 'react';
import * as _ from 'lodash';
import { DefaultNodeModel } from '@projectstorm/react-diagrams';
import { CanvasWidget } from '@projectstorm/react-canvas-core';
import Grid from '@mui/material/Grid';

import { Application } from '../Application';
import LeftMenu from './LeftMenu'

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

							if (data.type === 'in') {
								node = new DefaultNodeModel('Node ' + (nodesCount + 1), 'rgb(192,255,0)');
								node.addInPort('In');
							} else {
								node = new DefaultNodeModel('Node ' + (nodesCount + 1), 'rgb(0,192,255)');
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

						<div className='mesh-grid'>
							<CanvasWidget engine={this.props.app.getDiagramEngine()} />
						</div>

					</Grid>
				</Grid>
		);
	}
}
