
import {
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  TextField,

  Radio,
  RadioGroup,
  FormControlLabel,
} from '@mui/material'

export interface INodeDialog {
  onClose: React.MouseEventHandler,
}

function handleSubmit(evt): void {
  evt.preventDefault()
  console.log("submitting")
}

export default function NodeDialog(params : INodeDialog) {
  return (
    <form onSubmit={handleSubmit}>
      <DialogTitle>Create Custom Node</DialogTitle>
      <DialogContent>
        {/*<DialogContentText>
          Specify custom node details.
        </DialogContentText>*/}
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Node Name"
          type="text"
          fullWidth
          variant="standard"
        />
        <TextField
          sx={{ mt: 2 }}
          autoFocus
          margin="dense"
          id="name"
          label="Node Hex Color"
          type="text"
          defaultValue="#000"
          fullWidth
          variant="standard"
        />
        <RadioGroup row name="node-type" sx={{ mt: 2 }}>
          <FormControlLabel value="input" control={<Radio />} label="Input" />
          <FormControlLabel value="output" control={<Radio />} label="Output" />
        </RadioGroup>
      </DialogContent>
      <DialogActions>
        <Button onClick={params.onClose}>CANCEL</Button>
        <Button type='submit'>CREATE</Button>
      </DialogActions>
    </form>
  )
}
