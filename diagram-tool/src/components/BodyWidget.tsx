import * as React from 'react';
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
					<Grid item xs={10} className='mesh-grid'>
							<CanvasWidget engine={this.props.app.getDiagramEngine()} />
					</Grid>
				</Grid>
		);
	}
}
