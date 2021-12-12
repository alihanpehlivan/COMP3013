import { TrayItemWidget } from './TrayItemWidget';

import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';

import GetAppOutlinedIcon from '@mui/icons-material/GetAppOutlined';
import AddIcon from '@mui/icons-material/Add';

import Typography from '@mui/material/Typography';

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
          <AddIcon fontSize="small"/>
          <ListItemText>Create new node type</ListItemText>
        </MenuItem>
        <MenuItem>
          <GetAppOutlinedIcon fontSize="small"/>
          <ListItemText>Export as image</ListItemText>
        </MenuItem>
      </MenuList>
    </Box>);
}
