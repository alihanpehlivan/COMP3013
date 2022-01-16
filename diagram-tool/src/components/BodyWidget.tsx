import { useCallback, useEffect, useState } from "react"
import * as SRD from "@projectstorm/react-diagrams"
import { CanvasWidget } from "@projectstorm/react-canvas-core"
import Grid from "@mui/material/Grid"
import Application from "../Application"
import LeftMenu from "./LeftMenu"
import { NodeInfo, NodeTypes } from "../Types"

export const BodyWidget = (params: { app: Application }) => {
  let diagramEngine = params.app.getDiagramEngine()

  const [nodes, setNodes] = useState<NodeInfo>([])
  const [selectedNodeIndex, setSelectedNodeIndex] = useState(0)

  const getNodesFromEngine = useCallback(() => {
    let currentModel = diagramEngine.getModel()
    let modelNodes = currentModel.getNodes()

    let newNodes: NodeInfo = modelNodes.map((node) => {
      let options = node.getOptions()
      return {
        id: options["id"],
        name: options["name"],
        color: options["color"],
        type: NodeTypes.IN,
      }
    })

    return newNodes
  }, [diagramEngine])

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    // Toggle button
    if (selectedNodeIndex === index) {
      setSelectedNodeIndex(undefined)
      return
    }
    setSelectedNodeIndex(index)
  }

  const handleDrawingCanvasClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    let point = diagramEngine.getRelativeMousePoint(event)
    const currentNodeInfo = nodes[selectedNodeIndex]

    if (currentNodeInfo !== undefined) {
      console.log(currentNodeInfo)

      let curModel = diagramEngine.getModel()

      let newNode = new SRD.DefaultNodeModel(
        currentNodeInfo.name,
        currentNodeInfo.color
      )

      curModel.addNode(newNode)
      newNode.setPosition(point)
    }
  }

  // Load from engine
  useEffect(() => {
    setNodes(getNodesFromEngine())
  }, [getNodesFromEngine])

  return (
    <Grid container component='main' sx={{ height: "100vh" }}>
      {/* Left Menu */}
      <Grid item xs={2}>
        <LeftMenu
          engine={diagramEngine}
          nodes={nodes}
          onSelectNode={handleListItemClick}
          selectedNodeIndex={selectedNodeIndex}
        />
      </Grid>

      {/* Right Drawing Canvas */}
      <Grid
        item
        xs={10}
        className='mesh-grid'
        onMouseDown={handleDrawingCanvasClick}
      >
        <CanvasWidget engine={diagramEngine} />
      </Grid>
    </Grid>
  )
}

export default BodyWidget
