import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  IconButton,
} from "@mui/material"
import { Square as SquareIcon, Delete as DeleteIcon } from "@mui/icons-material"
import * as SRD from "@projectstorm/react-diagrams"
import { NodeInfo } from "../Types"

export default function LeftMenuNodeList(params: {
  engine: SRD.DiagramEngine
  nodes: NodeInfo
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
            onClick={() => {
              console.log("clickmeh")
            }}
            dense
          >
            <ListItemText primary={node.name} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  )
}
