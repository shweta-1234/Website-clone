import { Box, List, ListItem, ListItemButton, ListItemText } from '@mui/material'
import React from 'react'

function Sidebar() {

    // const listofitem = [
    //     { id: 1, name: 'Fashion' },
    //     { id: 2, name: 'Watches' },
    //     { id: 3, name: 'Fine Jewelary' },
    //     { id: 4, name: 'Fashion Jewelary' },
    //     { id: 5, name: 'Engagement & Wedding' },
    //     { id: 6, name: 'Mens Jewelary' },
    //     { id: 7, name: 'Vintage & Antique' },
    //     { id: 8, name: 'Loose Beads' },
    // ]
    
    return (
        <div>
            <Box flex={1} p={1} position="fixed"
                sx={{ display: { xs: "block", sm: "block" } }}>
                <List>
                    <ListItem disablePadding>
                        <ListItemButton component="a" hrf="#fashion">
                            <ListItemText primary="Fashion" />
                        </ListItemButton>
                    </ListItem>
                </List>

                <List>
                    <ListItem disablePadding>
                        <ListItemButton component="a" hrf="#Watches">
                            <ListItemText primary="Watches" />
                        </ListItemButton>
                    </ListItem>
                </List>
                <List>
                    <ListItem disablePadding>
                        <ListItemButton component="a" hrf="#home">
                            <ListItemText primary="Fine Jewelary" />
                        </ListItemButton>
                    </ListItem>
                </List>
                <List>
                    <ListItem disablePadding>
                        <ListItemButton component="a" hrf="#home">
                            <ListItemText primary="Fashion Jewelary" />
                        </ListItemButton>
                    </ListItem>
                </List>
                <List>
                    <ListItem disablePadding>
                        <ListItemButton component="a" hrf="#home">
                            <ListItemText primary="Engagement & Wedding" />
                        </ListItemButton>
                    </ListItem>
                </List>
                <List>
                    <ListItem disablePadding>
                        <ListItemButton component="a" hrf="#home">
                            <ListItemText primary="Men's Jewelary" />
                        </ListItemButton>
                    </ListItem>
                </List>
                <List>
                    <ListItem disablePadding>
                        <ListItemButton component="a" hrf="#home">
                            <ListItemText primary="Vintage & Antique" />
                        </ListItemButton>
                    </ListItem>
                </List>
                <List>
                    <ListItem disablePadding>
                        <ListItemButton component="a" hrf="#home">
                            <ListItemText primary="Loose Diamonds" />
                        </ListItemButton>
                    </ListItem>
                </List>
                <List>
                    <ListItem disablePadding>
                        <ListItemButton component="a" hrf="#home">
                            <ListItemText primary="Loose Beads" />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Box>
        </div>
    )
}

export default Sidebar
