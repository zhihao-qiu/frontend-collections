import './App.css';

import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

function ListPage() {
  const hoverItem ={
    borderRadius:2,
    '&:hover, &:focus': { bgcolor: 'rgba(39, 119, 245, 0.8)',
    color: 'white',
    },
  }

  return (

    <Box sx={{ width: '100%', maxWidth: 280, height: '100%',  padding: 2, borderRight: 0, backgroundColor: 'black', color: 'white'}}>
      <List>
        <ListItem disablePadding sx={{ ...hoverItem } } >
          <ListItemButton component="a" href="/">
            <ListItemText primary="3D Hover" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="/SimpleMap" sx={{ ...hoverItem } } >
            <ListItemText primary="Simple Canada Map" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="/BgImgScrolling" sx={{ ...hoverItem } } >
            <ListItemText primary="Background Image Scrolling" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="/ClipPath" sx={{ ...hoverItem } } >
            <ListItemText primary="ClipPath Effect" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="/SmileRatings" sx={{ ...hoverItem } } >
            <ListItemText primary="Smile Ratings" />
          </ListItemButton>
        </ListItem>
      </List>

    </Box>
  );
}

export default ListPage;
