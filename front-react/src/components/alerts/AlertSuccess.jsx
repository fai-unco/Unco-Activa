import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useNavigate } from 'react-router-dom';

const AlertSuccess = (props) => {
  const navigate = useNavigate()
  const handleClose = () => {
    props.onClose(false);        
    // if(props.navigate){
    //     navigate(props.navigate)
    // }
  };
  var sx = { sx: { bgcolor : 'gray-darker' } }

  return (
    <div>
      <Dialog
        open={props.open}
        onClose={handleClose}
        PaperProps={sx}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle sx={{ color: props.titlecolor, bgcolor:  props.bg }} id="alert-dialog-title">
          {props.title}
        </DialogTitle>
        <DialogContent sx={{ color: 'text.primary', bgcolor:  props.bg  }} >

          <DialogContentText  sx={{ color: 'text.primary'  }} id="alert-dialog-description">
            {props.description}
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ color: 'text.primary', bgcolor:  props.bg  }}>
          <Button onClick={handleClose}>Cerrar</Button>

        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AlertSuccess;