import { Container } from '@material-ui/core'
import { Box } from '@mui/material'
import React from 'react'
import Cardimaging from './Cardimaging'
import Customcards from './Customcards'
import Customgrid from './Customgrid'
import Imagelist from './Imagelist'
import Imageslider from './Imageslider'

function Feed() {
    return (
        <Container>
            <Box flex={2} p={1} ml={22}>
                <Imageslider />
                <Cardimaging />
                <Customcards />
                {/* <Imagelist/> */}
                <Customgrid/>
            </Box>
        </Container>
    )
}

export default Feed
