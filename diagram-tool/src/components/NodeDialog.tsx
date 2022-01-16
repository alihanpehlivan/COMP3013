import React, { useState } from "react"
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
import ColorPickerDialog from "./ColorPickerDialog"

export const NodeDialog = (params: {
  isOpen: boolean
  onClose: React.MouseEventHandler
  nodes: NodeInfo
}) => {
  const [color, setColor] = useState("#fff")

  return (
    <Dialog open={params.isOpen} onClose={params.onClose}>
      <form
        onSubmit={(e: React.SyntheticEvent) => {
          e.preventDefault()

          // Typechecks!
          const target = e.target as typeof e.target & {
            name: { value: string }
            nodetype: { value: NodeTypes }
          }

          if (target.name.value === "") {
            target.name.value = "Unnamed Node"
          }

          let node = new SRD.DefaultNodeModel(target.name.value, color)

          params.nodes.push({
            id: node.getOptions().id,
            name: target.name.value,
            color: color,
            type: target.nodetype.value,
          })

          params.onClose(null) // Close the dialog
        }}
      >
        <DialogTitle>Create Custom Node</DialogTitle>
        <DialogContent>
          {<DialogContentText>Specify custom node details.</DialogContentText>}
          <TextField
            autoFocus
            sx={{ mt: 2, mb: 2 }}
            margin='dense'
            id='name'
            label='Node Name'
            type='text'
            fullWidth
            variant='standard'
          />

          <ColorPickerDialog
            color={color}
            onChangeColor={setColor}
          ></ColorPickerDialog>

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
            <FormControlLabel
              value={NodeTypes.IN | NodeTypes.OUT}
              control={<Radio />}
              label='Both'
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
