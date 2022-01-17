export enum NodeTypes {
  NONE    = 0 << 0, // 0
  IN      = 1 << 0, // 1
  OUT     = 1 << 1, // 2
}

export type NodeInfo = {
  id: string
  name: string
  color: string
  type: NodeTypes
}

export type NodeInfoArray = NodeInfo[]
