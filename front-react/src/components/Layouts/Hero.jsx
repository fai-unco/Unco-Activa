import React, { useState, useEffect } from 'react'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

import { useNavigate } from 'react-router-dom';
import CategoriePaper from 'components/elements/CategoriePaper';
import axios from 'axios'

const Hero = (categories, setcategories) => {

    const navigate = useNavigate()
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    
    const ModalCategories = () => {
        const theme = useTheme();
        const fullScreen = useMediaQuery(theme.breakpoints.down('xs'));
        return (
            <div>
                <Dialog
                    fullScreen={fullScreen}
                    open={open}
                    onClose={handleClose}
                    maxWidth="md"
                    fullWidth={true}
                    // className="font-body"
                    aria-labelledby="responsive-dialog-title"

                >
                    <DialogTitle id="responsive-dialog-title" sx={{
                        background: '#626060'
                    }} >
                        {''}
                        {/* <IconButton
                            aria-label="close"
                            onClick={handleClose}
                            sx={{
                                background: (theme) => theme.palette.grey[800],
                                position: 'absolute',
                                right: 8,
                                top: 8,
                                color: (theme) => theme.palette.grey[100]
                            }}
                        >
                            <CloseIcon />
                        </IconButton> */}
                    </DialogTitle>
                    <DialogContent
                        sx={{
                            background: '#626060'
                        }}>
                        <Box
                            sx={{
                                className: 'xs:h-48',
                                width: 2 / 2,
                                display: 'flex',
                                flexWrap: 'wrap',
                                justifyContent: 'center',
                                '& > :not(style)': {
                                    m: 1,
                                    mt: 3,
                                    mb: 4,
                                    maxWidth: 300,
                                    width: 2 / 2,
                                    height: '50'
                                }
                            }}
                        >
                            <Paper elevation={3}
                                className="xs:h-24"
                                sx={{
                                    textAlign: 'center',
                                    color: '#0F3759',
                                    lineHeight: '50px',
                                    overflow: 'hidden',
                                    textOverflow: 'clip',
                                    fontSize: 20,
                                    fontWeight: 600,
                                    maxHeight: 100
                                }}> ELEGI UNA CATEGORIA</Paper>
                        </Box>
                        <Box
                            sx={{
                                width: 2 / 2,
                                display: 'flex',
                                flexWrap: 'wrap',
                                gap: 2,
                                gridTemplateColumns: { md: '1fr 1fr' },
                                justifyContent: 'center',
                                '& > :not(style)': {
                                    m: 2,
                                    maxWidth: 250,
                                    width: 2 / 2,
                                    height: 150
                                }
                            }}
                        >   
                            {
                                categories.categories.categories.map( (categorie) => (
                                    <CategoriePaper key={categorie.id} navigate={'inscribirse/' + categorie.name} color={categorie.color} name={categorie.name} ></CategoriePaper>
                            ))
                            }
                            {/* <CategoriePaper navigate="inscribirse/3k" color="rgb(235 165 30 )" name="3k" ></CategoriePaper>
                            <CategoriePaper navigate="inscribirse/7k" color="rgb(0 170 225)" name="7k" ></CategoriePaper>
                            <CategoriePaper navigate="inscribirse/15k" color="#127497" name="16k" ></CategoriePaper>
                            <CategoriePaper navigate="inscribirse/25k" color="#0F3759" name="26k" ></CategoriePaper> */}
                        </Box>
                    </DialogContent>
                </Dialog>
            </div >
        )
    }

    return (
        <div className='grid  justify-center h-96 bg-hero-pattern bg-cover'>
            <div className='grid items-end justify-center'>
                <div>
                    <img 
                        src='./logos/logoUNCOactiva.png'
                        className='h-40'>
                    </img>
                </div>
                <div>
                    <h1 className='text-blue-cyan text-[2.5rem] font-Hurme-Geometric-BO'>UNCo Activa</h1>
                </div>
            </div>
            <div className='grid sm:flex items-end justify-center pb-10 text-sm text-black font-bold max-h-full'>
                
                <div className='flex justify-center px-2'>
                    <button
                        variant="contained"
                        onClick={handleClickOpen}
                        className='border-2 border-white rounded-full px-5 py-1 bg-white hover:bg-opacity-0 hover:text-white ease-in-out duration-[1500ms]'>
                        REGISTRATE
                    </button>
                    <ModalCategories />
                </div>
                <div className='flex justify-center px-2'>
                    <a 
                        href="" 
                        className='border-2 border-white rounded-full px-5 py-1 text-white  hover:bg-white hover:text-black bg-opacity-0 ease-in-out duration-[1500ms]'>
                        CONOCE MAS
                    </a>
                </div>
                {/* {
                    categories.map( (categorie) => (
                        <div key={categorie.id}>{categorie.name}</div>
                    ))
                } */}
                
            </div>
        </div>
    )
}

export default Hero