import * as React from "react"
import { DiagramEngine } from "@projectstorm/react-diagrams"
import { Divider, MenuList, MenuItem, ListItemText } from "@mui/material"
import { GetAppOutlined, Article, Add } from "@mui/icons-material"
import LeftMenuNodeList from "./LeftMenuNodeList"
import { NodeInfoArray } from "../Types"

export default function LeftMenu(params: {
  engine: DiagramEngine
  nodes: NodeInfoArray
  setOpenDialog: (dialogName: string) => void
  onDeleteNode: (id: string) => void
  onSelectNode: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => void
  selectedNodeIndex: number
}) {
  return (
    <>
      <LeftMenuNodeList
        engine={params.engine}
        nodes={params.nodes}
        setOpenDialog={params.setOpenDialog}
        onDeleteNode={params.onDeleteNode}
        onSelectNode={params.onSelectNode}
        selectedNodeIndex={params.selectedNodeIndex}
      />

      <MenuList>
        <Divider />

        <MenuItem onClick={() => params.setOpenDialog('NODE')}>
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
              "https://martin-blenkhorn.gitbook.io/m.a.d-board-docs/",
              "blank"
            )
          }}
        >
          <Article fontSize='small' />
          <ListItemText>Documentation</ListItemText>
        </MenuItem>
      </MenuList>
    </>
  )
}
