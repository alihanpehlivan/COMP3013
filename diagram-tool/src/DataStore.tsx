import { createContext } from 'react'

const initialNodes = [
  {
    name: "Node 1",
    color: "#fff",
  },
  {
    name: "Node 2",
    color: "#000",
  },
]

export type NodeInfo = typeof initialNodes
const context = createContext<NodeInfo>(initialNodes)
export default context
