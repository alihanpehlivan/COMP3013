export enum NodeTypes {
  IN,
  OUT,
}

export type NodeInfo = {
  name: string
  color: string
  type: NodeTypes
}[]
