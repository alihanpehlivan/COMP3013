import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';

import createEngine, { DefaultLinkModel, DiagramModel } from '@projectstorm/react-diagrams';
import { TSCustomNodeFactory } from './diagram_nodes/TSCustomNodeFactory';
import { TSCustomNodeModel } from './diagram_nodes/TSCustomNodeModel';
import { BodyWidget } from './BodyWidget';

import './main.css';

import Menu from './components/menu'

// create an instance of the engine
const engine = createEngine();

// register the two engines
engine.getNodeFactories().registerFactory(new TSCustomNodeFactory());

// create a diagram model
const model = new DiagramModel();

//####################################################
// now create two nodes of each type, and connect them

const node1 = new TSCustomNodeModel({ color: 'rgb(192,255,0)' });
node1.setPosition(50, 50);

const node2 = new TSCustomNodeModel({ color: 'rgb(0,192,255)' });
node2.setPosition(200, 50);

const link1 = new DefaultLinkModel();
link1.setSourcePort(node1.getPort('out'));
link1.setTargetPort(node2.getPort('in'));

model.addAll(node1, node2, link1);

//####################################################

// install the model into the engine
engine.setModel(model);

export default function App() {
  return (
    <Grid container sx={{ height: '100vh' }}>
    <CssBaseline />
      <Grid container component="main" spacing={2}>
        <Grid item xs={2}>
            <Menu/>
        </Grid>
        <Grid item xs={10}>
        <BodyWidget engine={engine} />
        </Grid>
      </Grid>
    </Grid>
  );
}

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