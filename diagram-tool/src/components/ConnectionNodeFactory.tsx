// ConnectionNodeFactory.tsx
import { ConnectionNodeWidget } from './ConnectionNodeWidget';
import { ConnectionNodeModel } from './ConnectionNodeModel';
import * as React from 'react';
import { AbstractReactFactory } from '@projectstorm/react-canvas-core';
import { DiagramEngine } from '@projectstorm/react-diagrams-core';

export class ConnectionNodeFactory extends AbstractReactFactory<ConnectionNodeModel, DiagramEngine> {
    constructor() {
        super('diamond');
    }

    generateReactWidget(event): JSX.Element {
        // event.model is basically what's returned from generateModel()
        return <ConnectionNodeWidget engine={this.engine} size={50} node={event.model} />;
    }

    generateModel(event) {
        return new ConnectionNodeModel();
    }
}