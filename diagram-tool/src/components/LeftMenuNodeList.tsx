import { useContext } from 'react'

import {
  MenuList,
  MenuItem,
  ListItemText,
} from '@mui/material'

import NodeContext, { NodeInfo } from '../DataStore'

// Consumer
const LeftMenuNodeList = () => {
  const nodeArr = useContext<NodeInfo>(NodeContext);

  return(
    <MenuList>
      {nodeArr.map((node, index) => (
        <MenuItem key={index}>
          <ListItemText>{node.name} / {node.color}</ListItemText>
        </MenuItem>
      ))}
    </MenuList>
  )
}

export default LeftMenuNodeList
