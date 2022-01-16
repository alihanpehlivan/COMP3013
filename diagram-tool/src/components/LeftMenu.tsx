import * as React from "react"
import { DiagramEngine } from "@projectstorm/react-diagrams"
import { Divider, MenuList, MenuItem, ListItemText } from "@mui/material"
import { GetAppOutlined, Article, Add } from "@mui/icons-material"
import LeftMenuNodeList from "./LeftMenuNodeList"
import NodeDialog from "./NodeDialog"
import { NodeInfo } from "../Types"

export default function LeftMenu(params: {
  engine: DiagramEngine
  nodes: NodeInfo
  onSelectNode: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => void
  selectedNodeIndex: number
}) {
  const [openDialogName, setOpenDialog] = React.useState(null)

  const openCustomNodeDialog = () => {
    setOpenDialog("NODE")
  }

  const closeDialog = () => {
    setOpenDialog(null)
  }

  return (
    <>
      <LeftMenuNodeList
        engine={params.engine}
        nodes={params.nodes}
        onSelectNode={params.onSelectNode}
        selectedNodeIndex={params.selectedNodeIndex}
      />

      <MenuList>
        <Divider />

        <MenuItem onClick={openCustomNodeDialog}>
          <Add fontSize='small' />
          <ListItemText>Create new node type</ListItemText>
        </MenuItem>

        <MenuItem>
          <GetAppOutlined fontSize='small' />
          <ListItemText>Export as image</ListItemText>
        </MenuItem>

        <MenuItem
          onClick={() => {
            window.open(
              "https://app.gitbook.com/s/iGmyRzSxqdKjIOZOgnxc/",
              "blank"
            )
          }}
        >
          <Article fontSize='small' />
          <ListItemText>Documentation</ListItemText>
        </MenuItem>

        <NodeDialog
          isOpen={openDialogName === "NODE"}
          onClose={closeDialog}
          engine={params.engine}
          nodes={params.nodes}
        ></NodeDialog>
      </MenuList>
    </>
  )
}
