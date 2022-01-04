import * as SRD from '@projectstorm/react-diagrams';
import { ConnectionNodeModel } from './components/ConnectionNodeModel';
import { ConnectionNodeFactory } from './components/ConnectionNodeFactory';
import { ConnectionPortModel } from './components/ConnectionPortModel';

export class Application {
	protected activeModel: SRD.DiagramModel;
	protected diagramEngine: SRD.DiagramEngine;

	constructor() {
		this.diagramEngine = SRD.default();
		this.newModel();
	}

	public newModel() {
		this.activeModel = new SRD.DiagramModel();
		this.diagramEngine.setModel(this.activeModel);

		//3-A) create a default node
		var node1 = new SRD.DefaultNodeModel('Node 1', 'rgb(0,192,255)');
		let port = node1.addOutPort('Out');
		node1.setPosition(100, 100);

		//3-B) create another default node
		var node2 = new SRD.DefaultNodeModel('Node 2', 'rgb(192,255,0)');
		let port2 = node2.addInPort('In');
		node2.setPosition(400, 100);

		var connection1 = new ConnectionNodeModel();
		connection1.setPosition(500,700);

		// link the ports
		let link1 = port.link(port2);
		this.activeModel.addAll(node1, node2, link1);
	}

	public getActiveDiagram(): SRD.DiagramModel {
		return this.activeModel;
	}

	public getDiagramEngine(): SRD.DiagramEngine {
		return this.diagramEngine;
	}
}


//import Grid from '@mui/material/Grid';
//import CssBaseline from '@mui/material/CssBaseline';
//
//import createEngine, { DefaultLinkModel, DiagramModel } from '@projectstorm/react-diagrams';
//import { TSCustomNodeFactory } from './diagram_nodes/TSCustomNodeFactory';
//import { TSCustomNodeModel } from './diagram_nodes/TSCustomNodeModel';
//import { BodyWidget } from './BodyWidget';
//
//import './main.css';
//
//import Menu from './components/menu';
//
//// create an instance of the engine
//const engine = createEngine();
//
//// register the two engines
//engine.getNodeFactories().registerFactory(new TSCustomNodeFactory());
//
//// create a diagram model
//const model = new DiagramModel();
//
////####################################################
//// now create two nodes of each type, and connect them
//
//const node1 = new TSCustomNodeModel({ color: 'rgb(192,255,0)' });
//node1.setPosition(50, 50);
//
//const node2 = new TSCustomNodeModel({ color: 'rgb(0,192,255)' });
//node2.setPosition(200, 50);
//
//const link1 = new DefaultLinkModel();
//link1.setSourcePort(node1.getPort('out'));
//link1.setTargetPort(node2.getPort('in'));
//
//model.addAll(node1, node2, link1);
//
////####################################################
//
//// install the model into the engine
//engine.setModel(model);
//
//export default function App() {
//  return (
//    <Grid container sx={{ height: '100vh' }}>
//    <CssBaseline />
//      <Grid container component="main">
//        <Grid item xs={2}>
//            <Menu />
//        </Grid>
//        <Grid item xs={10}>
//        <BodyWidget engine={engine} />
//        </Grid>
//      </Grid>
//    </Grid>
//  );
//}

//<Grid container component="main" sx={{ height: '100vh' }}>
//<CssBaseline />
//<Grid
//  item
//  xs={false}
//  sm={4}
//  md={7}
//  sx={{
//    backgroundImage: 'url(https://source.unsplash.com/random)',
//    backgroundRepeat: 'no-repeat',
//    backgroundColor: (t) =>
//      t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
//    backgroundSize: 'cover',
//    backgroundPosition: 'center',
//  }}
///>
//<Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
//<BodyWidget engine={engine} />
//</Grid>
//</Grid>

//<Grid container spacing={2}>
//  <Grid item xs={4}>
//    <Item>LEFT BAR </Item>
//  </Grid>
//  <Grid item xs={8}>
//    <BodyWidget engine={engine} />
//  </Grid>
//</Grid>

//<Container maxWidth="sm">
//<Box sx={{ bgcolor: '#333', height: '100vh' }}>
//
//<BodyWidget engine={engine} />
//<Typography variant="h4" component="h1" gutterBottom>
//  Diagram App Example
//</Typography>
//</Box>
//</Container>