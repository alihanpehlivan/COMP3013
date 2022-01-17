import * as React from "react"
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material"

export const NodeDeleteDialog = (params: {
  isOpen: boolean
  onClose: React.MouseEventHandler
  onDeleteNode: (id: string) => void
}) => {
  return (
    <Dialog open={params.isOpen} onClose={params.onClose}>
      <DialogTitle id='alert-dialog-title'>
        {"Delete this node type(s)?"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id='alert-dialog-description'>
          This will delete the node type and thus type's created nodes.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={params.onClose}>Disagree</Button>
        <Button onClick={() => params.onDeleteNode("test")} autoFocus>
          Agree
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default NodeDeleteDialog
