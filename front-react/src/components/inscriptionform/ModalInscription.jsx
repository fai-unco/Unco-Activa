import React from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useNavigate } from 'react-router-dom';

const ModalInscription = (props) => {
    const handleCloseInscription = () => {
        props.setopenInscription(false);

    };

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
                        Categoria:<strong>{props.categoriename}</strong><br />
                        Precio:<strong>{props.price}</strong><br /><br />

                        De no enviarse el comprobante de pago/transferencia con todos los datos de la operación al mail <strong>uncoactiva@gmail.com</strong>, no se considerará como inscripto.
                    </DialogContentText>
                </DialogContent>
                <DialogActions sx={{ color: 'text.primary', bgcolor: props.bg }}>
                    <Button onClick={handleCloseInscription}>Cerrar</Button>
                    <Button onClick={props.submitInscription}>Aceptar</Button>

                </DialogActions>
            </Dialog>
        </div>
    );
}

export default ModalInscription;