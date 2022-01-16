import React, { useContext } from "react"
import * as SRD from "@projectstorm/react-diagrams"
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
} from "@mui/material"

import { NodeInfo, NodeTypes } from "../Types"

export const NodeDialog = (params: {
  isOpen: boolean
  onClose: React.MouseEventHandler
  engine: SRD.DiagramEngine
  nodes: NodeInfo
}) => {
  return (
    <Dialog open={params.isOpen} onClose={params.onClose}>
      <form
        onSubmit={(e: React.SyntheticEvent) => {
          e.preventDefault()

          // Typechecks!
          const target = e.target as typeof e.target & {
            name: { value: string }
            color: { value: string }
            nodetype: { value: NodeTypes }
          }

          //console.log(target.name.value, target.color.value, target.nodetype.value)

          params.nodes.push({
            name: target.name.value,
            color: target.color.value,
            type: target.nodetype.value,
          })

          let engine = params.engine
          let curModel = engine.getModel()

          let node = new SRD.DefaultNodeModel(
            target.name.value,
            target.color.value
          )

          curModel.addNode(node)
          node.setPosition(50, 50)

          // Close the dialog
          params.onClose(null)
        }}
      >
        <DialogTitle>Create Custom Node</DialogTitle>
        <DialogContent>
          {<DialogContentText>Specify custom node details.</DialogContentText>}
          <TextField
            autoFocus
            margin='dense'
            id='name'
            label='Node Name'
            type='text'
            fullWidth
            variant='standard'
          />
          <TextField
            sx={{ mt: 2 }}
            autoFocus
            margin='dense'
            id='color'
            label='Node Hex Color'
            type='text'
            defaultValue='#000'
            fullWidth
            variant='standard'
          />
          <RadioGroup
            name='nodetype'
            defaultValue={NodeTypes.IN}
            sx={{ mt: 2 }}
          >
            <FormControlLabel
              value={NodeTypes.IN}
              control={<Radio />}
              label='Input'
            />
            <FormControlLabel
              value={NodeTypes.OUT}
              control={<Radio />}
              label='Output'
            />
          </RadioGroup>
        </DialogContent>
        <DialogActions>
          <Button onClick={params.onClose}>CANCEL</Button>
          <Button type='submit'>CREATE</Button>
        </DialogActions>
      </form>
    </Dialog>
  )
}

export default NodeDialog
