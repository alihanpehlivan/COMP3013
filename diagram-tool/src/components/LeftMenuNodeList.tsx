import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  IconButton,
  Checkbox,
} from "@mui/material"
import { Square as SquareIcon, Delete as DeleteIcon } from "@mui/icons-material"
import * as SRD from "@projectstorm/react-diagrams"
import { NodeInfo } from "../Types"
import React from "react"

export default function LeftMenuNodeList(params: {
  engine: SRD.DiagramEngine
  nodes: NodeInfo
}) {
  const [selectedIndex, setSelectedIndex] = React.useState(0)

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    setSelectedIndex(index)
  }

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
                onClick={() => {
                  console.log("delete me")
                }}
              >
                <DeleteIcon />
              </IconButton>
            </>
          }
          disablePadding
        >
          <ListItemButton
            selected={selectedIndex === index}
            onClick={(event) => handleListItemClick(event, index)}
            dense
          >
            <ListItemText primary={node.name} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  )
}
