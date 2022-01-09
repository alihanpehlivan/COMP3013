import {
  Box,
  Divider,
  MenuList,
  MenuItem,
  ListItemText,
} from '@mui/material'

import {
  GetAppOutlined,
  Add,
} from '@mui/icons-material'

import TrayItemWidget from './TrayItemWidget';

export default function LeftMenu() {
  return (
    <Box>
      <Box sx={{ m: 2 }}>
        <TrayItemWidget model={{ type: 'in' }} name="In Node" color="rgb(192,255,0)" />
        <TrayItemWidget model={{ type: 'out' }} name="Out Node" color="rgb(0,192,255)" />
      </Box>
      <MenuList>
        <Divider />
        <MenuItem>
          <Add fontSize="small"/>
          <ListItemText>Create new node type</ListItemText>
        </MenuItem>
        <MenuItem>
          <GetAppOutlined fontSize="small"/>
          <ListItemText>Export as image</ListItemText>
        </MenuItem>
      </MenuList>
    </Box>);
}
