import React from "react"
import * as SRD from "@projectstorm/react-diagrams"
import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  IconButton,
} from "@mui/material"
import { Square as SquareIcon, Delete as DeleteIcon } from "@mui/icons-material"
import { NodeInfoArray } from "../Types"

export default function LeftMenuNodeList(params: {
  engine: SRD.DiagramEngine
  nodes: NodeInfoArray
  setOpenDialog: (name: string) => void
  onDeleteNode: (id: string) => void
  onSelectNode: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => void
  selectedNodeIndex: number
}) {
  return (
    <List>
      {params.nodes.map((node, index) => (
        <ListItem
          key={index}
          secondaryAction={
            <>
              <IconButton
                sx={{ marginRight: "2px" }}
                edge='end'
                onClick={() => {
                  console.log("change color")
                }}
              >
                <SquareIcon htmlColor={node.color} />
              </IconButton>

              <IconButton
                edge='end'
                onClick={() => params.onDeleteNode(node.id)}
              >
                <DeleteIcon />
              </IconButton>
            </>
          }
          disablePadding
        >
          <ListItemButton
            selected={params.selectedNodeIndex === index}
            onClick={(event) => params.onSelectNode(event, index)}
            dense
          >
            <ListItemText primary={node.name} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  )
}
