import { createContext } from 'react'

export enum NodeTypes {
  IN,
  OUT,
}

const initialNodes = [
  {
    name: "Node 1",
    color: "#fff",
    type: NodeTypes.IN,
  },
  {
    name: "Node 2",
    color: "#000",
    type: NodeTypes.OUT,
  },
]

export type NodeInfo = typeof initialNodes
const context = createContext<NodeInfo>(initialNodes)
export default context
