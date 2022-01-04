import { LinkModel, PortModel, DefaultLinkModel, PortModelAlignment } from '@projectstorm/react-diagrams';

export class ConnectionPortModel extends PortModel {
	constructor(alignment: PortModelAlignment) {
		super({
			type: 'connection',
			name: alignment,
			alignment: alignment
		});
	}

	createLinkModel(): LinkModel {
		return new DefaultLinkModel();
	}
}