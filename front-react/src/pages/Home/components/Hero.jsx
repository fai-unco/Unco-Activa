import React, { useState } from 'react'
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import BoxCategories from 'components/inscriptionform/boxCategories';

const Hero = () => {

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
          <DialogContent
            className='bg-black-unco'>
            <IconButton
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
            </IconButton>
            <BoxCategories  />
          </DialogContent>
        </Dialog>
      </div >
    )
  }

  return (
    <div className='grid justify-center items-center gap-5 p-5'>

      <div className='grid justify-center'>
        <div className=''>
          <img
            alt='UNCo Activa Imagotipo'
            src='/logos/uncoActiva/imagotipo/UNCo Activa 2026 Blanco.svg'
            className='h-32 sm:h-52 w-auto'>
          </img>
        </div>
        {/* <div className='flex justify-center text-center'>
          <p className='font-Header-B text-[2.5rem] text-blue-cyan'>
            UNCo Activa
          </p>
        </div> */}        
      </div>

      <div className='grid sm:flex items-end justify-center text-sm text-black-unco font-Header-B max-h-full gap-4'>
        <div className='flex justify-center px-2'>
          {/* <a
            variant="contained"
            href='https://cronometrajeinstantaneo.com/resultados/unco-activa-2022'
            className='border-2 border-lime-unco rounded-full px-5 py-1 bg-lime-unco hover:bg-opacity-0 hover:text-lime-unco ease-in-out duration-[1500ms]'>
            RESULTADOS
          </a> */}
          <button
            variant="contained"
            onClick={handleClickOpen}
            className='border-2 border-lime-unco rounded-full px-5 py-1 bg-lime-unco hover:bg-opacity-0 hover:text-lime-unco ease-in-out duration-[1500ms]'>
            PRE-INSCRIBITE
          </button>
          <ModalCategories />
        </div>
        <div className='flex justify-center px-2'>          
          <div
            onClick={(e) => {
              e.preventDefault();              
              let racepath = document.getElementById('conoceMas');
              racepath.scrollIntoView({ behavior: 'smooth' });
            }}           
            className='cursor-pointer border-2 scroll-smooth  border-lime-unco rounded-full px-5 py-1 text-lime-unco  hover:bg-lime-unco hover:text-black bg-opacity-0 ease-in-out duration-[1500ms]'>
            CONOCE MÁS
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero