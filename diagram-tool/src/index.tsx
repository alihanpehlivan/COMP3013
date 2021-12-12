import * as React from 'react';
import * as ReactDOM from 'react-dom';

import './main.css';

import createEngine, { DefaultLinkModel, DiagramModel } from '@projectstorm/react-diagrams';

import { TSCustomNodeFactory } from './nodes/TSCustomNodeFactory';
import { TSCustomNodeModel } from './nodes/TSCustomNodeModel';

import { BodyWidget } from './BodyWidget';

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

document.addEventListener('DOMContentLoaded', () => {
	ReactDOM.render(<BodyWidget engine={engine} />, document.querySelector('#application'));
});


//import React from 'react';
//import ReactDOM from 'react-dom';
//import './index.css';
//import App from './App';
//import reportWebVitals from './reportWebVitals';
//
//ReactDOM.render(
//  <React.StrictMode>
//    <App />
//  </React.StrictMode>,
//  document.getElementById('root')
//);
//
//// If you want to start measuring performance in your app, pass a function
//// to log results (for example: reportWebVitals(console.log))
//// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
//