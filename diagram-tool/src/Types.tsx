export enum NodeTypes {
  IN,
  OUT,
}

export type NodeInfo = {
  id: string
  name: string
  color: string
  type: NodeTypes
}[]
