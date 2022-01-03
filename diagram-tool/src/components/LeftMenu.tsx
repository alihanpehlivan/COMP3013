import { TrayItemWidget } from './TrayItemWidget';

import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';

import GetAppOutlinedIcon from '@mui/icons-material/GetAppOutlined';
import AddIcon from '@mui/icons-material/Add';

import Typography from '@mui/material/Typography';



function loadDocs(){
  window.location.href = "documentation.html";
}





export default function LeftMenu() {
  return (
    <Box>

      <Box sx={{ m: 3 }}>
      <TrayItemWidget model={{ type: 'in' }} name="In Node" color="rgb(192,255,0)" />
      <TrayItemWidget model={{ type: 'out' }} name="Out Node" color="rgb(0,192,255)" />
      <TrayItemWidget model={{type: 'A'}} name="In Node" color="rgb(255,0,0)"/>
	  <TrayItemWidget model={{ type: 'E' }} name="Out Node" color="rgb(255,255,0)"/>
      <TrayItemWidget model={{ type: 'V' }} name="In Node" color="rgb(255,127,0)" />
      <TrayItemWidget model={{ type: 'S' }} name="In Node" color="rgb(160,32,240)" />
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
        <MenuItem>
        <ListItem onClick={loadDocs}>Documentation</ListItem>
        </MenuItem>
      </MenuList>
    </Box>); 
}
