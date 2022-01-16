import { useCallback, useEffect, useState } from "react"
import { CanvasWidget } from "@projectstorm/react-canvas-core"
import Grid from "@mui/material/Grid"
import Application from "../Application"
import LeftMenu from "./LeftMenu"
import { NodeInfo, NodeTypes } from "../Types"

export const BodyWidget = (params: { app: Application }) => {
  let diagramEngine = params.app.getDiagramEngine()

  const [nodes, setNodes] = useState<NodeInfo>([])

  const getNodesFromEngine = useCallback(() => {
    let currentModel = diagramEngine.getModel()
    let modelNodes = currentModel.getNodes()

    let newNodes: NodeInfo = modelNodes.map((node) => {
      let options = node.getOptions()
      return {
        name: options["name"],
        color: options["color"],
        type: NodeTypes.IN,
      }
    })

    return newNodes
  }, [diagramEngine])

  const addNode = (): void => {
    setNodes([
      ...nodes,
      {
        name: "name",
        color: "#fff",
        type: NodeTypes.IN,
      },
    ])
  }

  // Load from engine
  useEffect(() => {
    setNodes(getNodesFromEngine())
  }, [getNodesFromEngine])

  return (
    <Grid container component='main' sx={{ height: "100vh" }}>
      {/* Left Menu */}
      <Grid item xs={2}>
        <LeftMenu engine={diagramEngine} nodes={nodes} />
      </Grid>

      {/* Right Drawing Canvas */}
      <Grid item xs={10} className='mesh-grid'>
        <CanvasWidget engine={diagramEngine} />
      </Grid>
    </Grid>
  )
}

export default BodyWidget
