// ConnectionNodeModel.ts
import { DefaultPortModel, NodeModel, NodeModelGenerics, PortModelAlignment } from '@projectstorm/react-diagrams';
import { ConnectionPortModel } from './ConnectionPortModel';

export interface ConnectionNodeModelGenerics {
    PORT: ConnectionPortModel;
}

 export class ConnectionNodeModel extends NodeModel<NodeModelGenerics & ConnectionNodeModelGenerics> {
    constructor() {
        super({
            type: 'connection'
        });
        this.addPort(new DefaultPortModel(PortModelAlignment.LEFT));
        this.addPort(new DefaultPortModel(PortModelAlignment.RIGHT));
    }

    addPort<T extends DefaultPortModel>(port: T): T {
		super.addPort(port);
		if (port.getOptions().in) {
			if (this.portsIn.indexOf(port) === -1) {
				this.portsIn.push(port);
			}
		} else {
			if (this.portsOut.indexOf(port) === -1) {
				this.portsOut.push(port);
			}
		}
		return port;
	}

	addInPort(label: string, after = true): DefaultPortModel {
		const p = new DefaultPortModel({
			in: true,
			name: label,
			label: label,
			alignment: PortModelAlignment.LEFT
		});
		if (!after) {
			this.portsIn.splice(0, 0, p);
		}
		return this.addPort(p);
	}

	addOutPort(label: string, after = true): DefaultPortModel {
		const p = new DefaultPortModel({
			in: false,
			name: label,
			label: label,
			alignment: PortModelAlignment.RIGHT
		});
		if (!after) {
			this.portsOut.splice(0, 0, p);
		}
		return this.addPort(p);
	}

}