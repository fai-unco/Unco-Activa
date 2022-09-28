import React from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import { green } from '@mui/material/colors';
import { useNavigate } from 'react-router-dom';

const ModalInscription = (props) => {
  const handleCloseInscription = () => {
    props.setopenInscription(false);

  };

  const  CircularIntegration = () => {
    const [loading, setLoading] = React.useState(false);
    const [success, setSuccess] = React.useState(false);
    const timer = React.useRef();
    
    const buttonSx = {
      ...(success && {
        bgcolor: green[500],
        '&:hover': {
          bgcolor: green[700]
        }
      })
    };
    
    React.useEffect(() => {
      return () => {
        clearTimeout(timer.current);
      };
    }, []);
    
    const handleButtonClick = () => {
      if (!loading) {
        props.submitInscription()
        setSuccess(false);
        setLoading(true);
        timer.current = window.setTimeout(() => {
          setSuccess(true);
          setLoading(false);
        }, 8000);
      }
    };
    
    return (
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box sx={{ m: 1, position: 'relative' }}>
          <Button
            variant="contained"
            sx={buttonSx}
            disabled={loading}
            onClick={handleButtonClick}
          >
              Aceptar y Enviar datos
          </Button>
          {loading && (
            <CircularProgress
              size={24}
              sx={{
                color: green[500],
                position: 'absolute',
                top: '50%',
                left: '50%',
                marginTop: '-12px',
                marginLeft: '-12px'
              }}
            />
          )}
        </Box>
      </Box>
    );
  }

  var sx = { sx: { bgcolor: 'gray-darker' } }

  return (
    <div>
      <Dialog
        open={props.openInscription}
        onClose={handleCloseInscription}
        PaperProps={sx}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle sx={{ color: '', bgcolor: ' rgb(240 240 240)' }} id='alert-dialog-title'>
          {'Modo de inscripción'}
        </DialogTitle>
        <DialogContent sx={{ color: 'text.primary', bgcolor: ' rgb(240 240 240)' }} >

          <DialogContentText sx={{ color: 'text.primary' }} id='alert-dialog-description'>
            <br />


                        El participante deberá realizar el pago, únicamente por transferencia a la siguiente cuenta bancaria el valor de:<br />
                        Banco Credicoop Cooperativo Limitado <br />
                        Adherente: Universidad Nacional del Comahue.<br />
                        Operador: 549505 Roberto Antonio Sepulveda.<br />
                        Nro Cuenta – Cuenta Corriente: $191-093-024908/9<br />
                        CBU 19100933-55009302490896 <br />
                        Categoria:<strong> {props.categorie.name}</strong><br />

                        <strong>Precio:</strong> ${props.categorie.price}<br /><br />
                        <strong>ATENCIÓN COMUNIDAD UNIVERSITARIA:</strong> <br />
                        Presentado certificado de alumno regular, y en el caso de docentes y no docentes mediante número de legajo, acceden a precios promocionales. Enviar email a uncoactiva@gmail.com para recibir dicho beneficio.<br />

                        <strong>Precio Promocional:</strong> ${props.categorie.promo}<br /><br />

                        De no enviarse el comprobante de pago/transferencia con todos los datos de la operación al mail <strong>uncoactiva@gmail.com</strong>, no se considerará como inscripto.
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ color: 'text.primary', bgcolor: props.bg }}>
          <Button onClick={handleCloseInscription}>Cerrar</Button>          
          <CircularIntegration > </CircularIntegration>

        </DialogActions>
      </Dialog>
    </div>
  );
}

export default ModalInscription;