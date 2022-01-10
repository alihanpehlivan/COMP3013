import * as React from 'react';

import {
  Divider,
  MenuList,
  MenuItem,
  ListItemText,
} from '@mui/material'

import {
  GetAppOutlined,
  Article,
  Add,
} from '@mui/icons-material'

import LeftMenuNodeList from './LeftMenuNodeList';
import NodeDialog from './NodeDialog';

export default function LeftMenu() {

  const [openDialogName, setOpenDialog] = React.useState(null);

  const openCustomNodeDialog = () => {
    setOpenDialog('NODE')
  }

  const closeDialog = () => {
    setOpenDialog(null);
  };
  
  return (
    <>
      <LeftMenuNodeList />

      <MenuList>
        <Divider />
        <MenuItem onClick={openCustomNodeDialog}>
          <Add fontSize="small"/>
          <ListItemText>Create new node type</ListItemText>
        </MenuItem>

        <MenuItem>
          <GetAppOutlined fontSize="small"/>
          <ListItemText>Export as image</ListItemText>
        </MenuItem>

        <MenuItem onClick={() => { window.open("https://app.gitbook.com/s/iGmyRzSxqdKjIOZOgnxc/", 'blank') }}>
          <Article fontSize="small"/>
          <ListItemText>Documentation</ListItemText>
        </MenuItem>

        <NodeDialog isOpen={openDialogName === 'NODE'} onClose={closeDialog} ></NodeDialog>

      </MenuList>

    </>);
}
