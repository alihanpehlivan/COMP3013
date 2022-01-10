import * as React from 'react';

import {
  Box,
  Divider,
  Dialog,
  MenuList,
  MenuItem,
  ListItemText,
  ListItem,
} from '@mui/material'

import {
  GetAppOutlined,
  Add,
} from '@mui/icons-material'

import TrayItemWidget from './TrayItemWidget';
import LeftMenuNodeList from './LeftMenuNodeList';
import NodeDialog from './NodeDialog';

export default function LeftMenu() {

  const [isOpen, setNodeDialogOpen] = React.useState(false);

  function loadDocs()
  {
    window.open("https://app.gitbook.com/s/iGmyRzSxqdKjIOZOgnxc/", 'blank'); //loads Documentation in a new tab

  }

  return (
    <>
      <Box sx={{ m: 2 }}>
        <TrayItemWidget model={{ type: 'in' }} name="In Node" color="rgb(192,255,0)" />
        <TrayItemWidget model={{ type: 'out' }} name="Out Node" color="rgb(0,192,255)" />
      </Box>
      <Divider />

      <LeftMenuNodeList />

      <MenuList>
        <Divider />

        <Dialog open={isOpen} onClose={() => setNodeDialogOpen(false)} >
            <NodeDialog onClose={() => setNodeDialogOpen(false)}></NodeDialog>
        </Dialog>

        <MenuItem onClick={ () => setNodeDialogOpen(true) }>
          <Add fontSize="small"/>
          <ListItemText>Create new node type</ListItemText>
        </MenuItem>

        <MenuItem>
          <GetAppOutlined fontSize="small"/>
          <ListItemText>Export as image</ListItemText>
        </MenuItem>

        <MenuItem>
        <ListItem onClick={loadDocs}>Documentation</ListItem>
        </MenuItem>

      </MenuList>
    </>);
}
