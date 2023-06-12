import { Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import { styled } from '@mui/material/styles'
import { colorPrimary, colorUrbano } from '../../UI/variablesStyle'
import { Link } from 'react-router-dom'

const DrawerBox = styled(Drawer)(({ theme }) => ({
  '& .MuiDrawer-paper': {
    background: `${colorUrbano}`,
    width: '15rem'
  }
}))

const ButtonIcon = styled(IconButton)(({ theme }) => ({
  color: `${colorPrimary}`,
  marginLeft: 'auto'
}))

const Text = styled(ListItemText)(({ theme }) => ({
  color: `${colorPrimary}`
}))

function DrawerComponent() {
  const pages = ['Videos', 'Crear Video', 'Crear Categoría']
  const links = ['/videos', '/crear-video', '/crear-categoria']
  const [openDrawer, setOpenDrawer] = useState(false)
  return (
    <>
      <DrawerBox
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        anchor='right'>
        <List>
          {pages.map((text, index) => (
            <ListItemButton
              component={Link}
              to={links[index]}
              key={index}>
              <ListItemIcon>
                <Text>{text}</Text>
              </ListItemIcon>
            </ListItemButton>
          ))}
        </List>
      </DrawerBox>
      <ButtonIcon onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuIcon />
      </ButtonIcon>
    </>
  )
}

export default DrawerComponent