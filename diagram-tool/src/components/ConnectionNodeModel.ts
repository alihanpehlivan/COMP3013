// ConnectionNodeModel.ts
import { NodeModel, NodeModelGenerics, PortModelAlignment } from '@projectstorm/react-diagrams';
import { ConnectionPortModel } from './ConnectionPortModel';

export interface ConnectionNodeModelGenerics {
    PORT: ConnectionPortModel;
}

 export class ConnectionNodeModel extends NodeModel<NodeModelGenerics & ConnectionNodeModelGenerics> {
    constructor() {
        super({
            type: 'connection'
        });
        this.addPort(new ConnectionPortModel(PortModelAlignment.LEFT));
        this.addPort(new ConnectionPortModel(PortModelAlignment.RIGHT));
    }
}