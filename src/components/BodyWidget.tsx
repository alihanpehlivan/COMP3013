import { useEffect, useState } from "react"
import * as _ from "lodash"
import * as SRD from "@projectstorm/react-diagrams"
import { CanvasWidget } from "@projectstorm/react-canvas-core"
import Grid from "@mui/material/Grid"
import Application from "../Application"
import LeftMenu from "./LeftMenu"
import NodeCreateDialog from "./NodeCreateDialog"
import { NodeInfoArray, NodeTypes } from "../Types"

export const BodyWidget = (params: { app: Application }) => {
  let diagramEngine = params.app.getDiagramEngine()

  const [nodes, setNodes] = useState<NodeInfoArray>([])
  const [openDialogName, setOpenDialog] = useState(null)
  const [selectedNodeIndex, setSelectedNodeIndex] = useState(undefined)

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
      //console.log(currentNodeInfo)
      let curModel = diagramEngine.getModel()

      let newNode = new SRD.DefaultNodeModel(
        currentNodeInfo.name,
        currentNodeInfo.color
      )

      if (currentNodeInfo.type & NodeTypes.IN) {
        newNode.addInPort("In")
      }
      if (currentNodeInfo.type & NodeTypes.OUT) {
        newNode.addOutPort("Out")
      }

      curModel.addNode(newNode)
      newNode.setPosition(point)
    }
  }

  const deleteNode = (id: string) => {
    let curModel = diagramEngine.getModel()
    let curNodes = curModel.getNodes()

    let foundNode = nodes.find((node) => node.id === id)

    if (foundNode !== undefined) {
      setNodes(
        nodes.filter((node) => {
          return node.id !== id
        })
      )

      _.forEach(curNodes, (model: SRD.NodeModel) => {
        let nodeOptions = model.getOptions()
        let curNodeName = nodeOptions["name"]
        let curNodeColor = nodeOptions["color"]

        if (!model.isLocked()) {
          if (
            curNodeName === foundNode.name &&
            curNodeColor === foundNode.color
          ) {
            model.remove()
          }
        }
      })

      diagramEngine.repaintCanvas()
    }
  }

  // Load from engine
  useEffect(() => {
    const getNodesFromEngine = () => {
      let currentModel = diagramEngine.getModel()
      let modelNodes = currentModel.getNodes()

      let newNodes: NodeInfoArray = modelNodes.map((node) => {
        let options = node.getOptions()
        let ports = node.getPorts()

        // Determine port IO
        let nodeType: NodeTypes = NodeTypes.NONE

        if (ports.In !== undefined) nodeType |= NodeTypes.IN
        if (ports.Out !== undefined) nodeType |= NodeTypes.OUT

        return {
          id: options["id"],
          name: options["name"],
          color: options["color"],
          type: nodeType,
        }
      })

      return newNodes
    }

    setNodes(getNodesFromEngine())
  }, [diagramEngine])

  return (
    <>
      <Grid container component='main' sx={{ height: "100vh" }}>
        {/* Left Menu */}
        <Grid item xs={2}>
          <LeftMenu
            engine={diagramEngine}
            nodes={nodes}
            setOpenDialog={setOpenDialog}
            onDeleteNode={deleteNode}
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

      {/* Put additional dialogs here */}
      <NodeCreateDialog
        isOpen={openDialogName === "NODE"}
        onClose={() => setOpenDialog(null)}
        nodes={nodes}
      />
    </>
  )
}

export default BodyWidget
