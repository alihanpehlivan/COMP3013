// ConnectionNodeWidget.tsx
import * as React from 'react';
import { ConnectionNodeModel } from './ConnectionNodeModel';
import { DiagramEngine, PortModelAlignment, PortWidget } from '@projectstorm/react-diagrams';
import styled from '@emotion/styled';

export interface ConnectionNodeWidgetProps {
    // node and engine props are required
    node: ConnectionNodeModel;
    engine: DiagramEngine;
    size?: number;
}

namespace S {
    export const Port = styled.div`
        width: 16px;
        height: 16px;
        z-index: 10;
        background: rgba(0, 0, 0, 0.5);
        border-radius: 8px;
        cursor: pointer;
        &:hover {
            background: rgba(0, 0, 0, 1);
        }
    `;
}

// this can be any customized react component as long as they respect
// the node and engine props
export class ConnectionNodeWidget extends React.Component<ConnectionNodeWidgetProps> {
    render() {
        return (
            <div
                className={'connection-node'}
                style={{
                    position: 'relative',
                    width: this.props.size,
                    height: this.props.size
                }}>
                <svg
                    width={this.props.size}
                    height={this.props.size}
                    dangerouslySetInnerHTML={{
                        __html:
                            `
          <g id="Layer_1">
          </g>
          <g id="Layer_2">
            <polygon fill="mediumpurple" stroke="${
                            this.props.node.isSelected() ? 'white' : '#000000'
                        }" stroke-width="3" stroke-miterlimit="10" points="10,` +
                            this.props.size / 2 +
                            ` ` +
                            this.props.size / 2 +
                            `,10 ` +
                            (this.props.size - 10) +
                            `,` +
                            this.props.size / 2 +
                            ` ` +
                            this.props.size / 2 +
                            `,` +
                            (this.props.size - 10) +
                            ` "/>
          </g>
        `
                    }}
                />
                <PortWidget
                    style={{
                        top: this.props.size / 2 - 8,
                        left: -8,
                        position: 'absolute'
                    }}
                    port={this.props.node.getPort(PortModelAlignment.LEFT)}
                    engine={this.props.engine}>
                    <S.Port />
                </PortWidget>
                <PortWidget
                    style={{
                        left: this.props.size - 8,
                        top: this.props.size / 2 - 8,
                        position: 'absolute'
                    }}
                    port={this.props.node.getPort(PortModelAlignment.RIGHT)}
                    engine={this.props.engine}>
                    <S.Port />
                </PortWidget>
            </div>
        );
    }
}