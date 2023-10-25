import React from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { BankAccount } from 'components/elements/BankAccount';

const ModalRules = (props) => {
    
  const handleClose = () => {
    props.onClose(false);

  };
  const isdateOfRace = Date.now() > new Date('October 27, 2023 11:59:59') 
  var sx = { sx: { bgcolor: 'gray-darker' } }
  return (
    <div>
      <Dialog
        open={props.open}
        onClose={handleClose}
        PaperProps={sx}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle sx={{ color: props.titlecolor, bgcolor: props.bg }} id="alert-dialog-title">
          {props.title}
        </DialogTitle>
        <DialogContent sx={{ color: 'text.primary', bgcolor: props.bg }} >

          <DialogContentText sx={{ color: 'text.primary' }} id="alert-dialog-description">
            <br />
            { !isdateOfRace ? 
              <p> 
                        - <strong>Modo de inscripción:</strong> El participante deberá inscribirse a la carrera por la web uncoactiva.fi.uncoma.edu.ar, realizando el pago, únicamente por transferencia a la siguiente cuenta bancaria:<br />
                        <BankAccount />
                <strong>Categoria: </strong><strong style={{color: props.categorie.color}}> {props.categorie.name}</strong><br />

                <strong>Precio:</strong> ${props.categorie.price}<br /><br />

                        De no enviarse el comprobante de pago/transferencia con todos los datos de la operación al mail <strong>uncoactiva@gmail.com</strong>, no se considerará como inscripto.

              </p> : ''}
            <br />
            <p> 1.-Es responsabilidad del participante estar bien preparado para la prueba. Esto es, gozar de buena salud en general, así como tener un nivel aceptable de preparación. La inscripción en una prueba no asegura ni cubre esta responsabilidad.
            </p>
            <br />
            <p>
                            2.-La organización recomienda que todos los participantes se realicen un control médico previo a la carrera para asegurarse estar apto para el evento.
                            
            </p>
            <br />
            <p>
                            3.-Es obligatorio completar la ficha de inscripción publicada en forma on line en el sitio oficial de la carrera.

            </p>
            <br />
            <p>
                            4.-La organización, a través de los fiscales autorizados, se reserva el derecho de interrumpir la participación de aquellos competidores que por su condición se considere que están poniendo en riesgo su integridad física, en caso de ser indicado, es obligación del participante hacer caso a la misma. De no respetarse, será descalificado y la responsabilidad corre por cuenta del propio participante.

            </p>
            <br />
            <p>
                            5.-La organización dispondrá ambulancias y enfermeros para la asistencia médica extra hospitalaria a quienes lo necesiten. Cada corredor está en conocimiento de las posibles consecuencias de la práctica de una actividad de este tipo, deberá por lo tanto asumir y ser responsable de cualquier gasto relacionado a emergencias médicas, salvo aquellos cubiertos por el seguro de corredor y la atención de la emergencia en terreno ya sea con la ambulancia, socorristas, enfermeros o médicos de la organización de la carrera. En caso de ser necesario, para continuar con los primeros auxilios, serán trasladados al hospital más cercano. Es fundamental que cada corredor al completar la ficha de inscripción detalle en “Observaciones” los datos de su cobertura médica y un teléfono de urgencia.

            </p>
            <br />
            <p>
                            6.-El participante tiene la obligación de conocer y respetar estas reglas de competición, así como las normas de circulación y las instrucciones de los responsables de cada prueba.

            </p>
            <br />
            <p>
                            7.-El participante tiene la obligación de conocer, defender y respetar el medio ambiente en el que se realiza el evento. La participación en la prueba no exime al participante de esta obligación. El mal trato o la falta de respeto hacia el medio (barda) puede ser motivo de descalificación, pudiendo llegarse a la expulsión de la competición general.

            </p>
            <br />
            <p>

                            8.-El participante que abandona la competición está obligado a quitarse el número y comunicar a los jueces, fiscales o banderilleros su abandono, entregando el troquel del respectivo número.
            </p>
            <br />
            <p>
                            9.-En la charla técnica, previa a largada, se brindará una explicación sobre el circuito del recorrido. En caso de que un participante se extravíe durante la competencia, por no ver una cinta, o no prestar atención a los senderos o indicaciones por parte de la organización, los corredores son responsables de volver al camino y retomar el recorrido. Ante cualquier reclamo por extravío la organización no se hace responsable.

            </p>
            <br />
            <p>

                            10.-El recorrido podrá ser modificado antes o incluso durante el desarrollo mismo de la carrera atendiendo a razones de seguridad de los participantes u otras circunstancias que a consideración de la organización lo demanden. En caso de que la decisión sea tomada antes de la largada, los corredores serán notificados. En caso de que la decisión sea tomada durante el desarrollo de la carrera, los participantes serán informados en el puesto de control anterior a la modificación. La organización no se hará responsable de cualquier tipo de reclamo por parte de los participantes por esta causa.
            </p>
            <br />
                        
            <p>
                        11.-Las imágenes que se obtengan en la competencia podrán ser utilizadas por la organización y por las empresas auspiciantes para fines de difusión y publicidad del evento y/o de productos asociados al mismo.<br /><br />
                        12.-Los competidores que acepten participar en este evento no tendrán derecho a realizar reclamos.

            </p>
            <br />
            <p>
                        13.-Responsabilidades:<br /> Al inscribirse, el participante acepta el presente reglamento y declara:
                        a) Saber que habrá lugares a los que no se puede acceder con vehículos, con lo cual la atención médica inmediata es limitada.<br />
                        b) Conocer las características del terreno y los riesgos posibles de lesiones traumatológicas como torceduras, esguinces, incluso fracturas y, que por razones de seguridad, la organización priorizará la atención y evacuación de las emergencias y urgencias médicas, considerándose como tales a aquellos casos que puedan evolucionar en riesgo de muerte, pudiendo demandar más tiempo que la atención de lesiones como las antes descriptas.<br />
                        c) Eximir a los Organizadores, Municipios, Propietarios de las tierras del circuito de la carrera y los Patrocinantes de toda responsabilidad por accidentes personales; daños y/o pérdidas de objetos que pudiera ocurrirle antes, durante o después de su participación en la prueba.<br />

            </p>

          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ color: 'text.primary', bgcolor: props.bg }}>
          <Button onClick={handleClose}>Cerrar</Button>

        </DialogActions>
      </Dialog>
    </div>
  );
}

export default ModalRules