import React from 'react'
import { Dialog, DialogTitle, DialogContent, Typography } from '@mui/material'

import Button from '../btn';

const Popup = (props: any) => {
    const { title, children, openPopup, setOpenPopup } = props
    return (
        <>
            <Dialog open={openPopup} maxWidth='lg'>
                <DialogTitle>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Typography variant='h6' component='div' sx={{ flexGrow: '1' }} >
                            {title}
                        </Typography>
                        <Button
                            color='error'
                            text="X"
                            onClick={() => { setOpenPopup(false) }}
                        >

                        </Button>
                    </div>
                </DialogTitle>
                <DialogContent dividers>
                    {children}
                </DialogContent>
            </Dialog >
        </>

    )
}

export default Popup