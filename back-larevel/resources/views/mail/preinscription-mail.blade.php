@component('mail::message')
# Hola {{ $datos['name'] }}! Para continuar con la inscripcion por favor sigue con las instruciones para pagar la inscripcion.
    ---

### El participante deberá realizar el pago, únicamente por transferencia a la siguiente cuenta bancaria:

>### Banco Credicoop Cooperativo Limitado 
>### Adherente: Universidad Nacional del Comahue.
>### Operador: 549505 Roberto Antonio Sepulveda.
>### Nro Cuenta – Cuenta Corriente: $191-093-024908/9
>### CBU 19100933-55009302490896 
>### Categoria:<strong>{{$datos['categoriename']}}</strong>
>### Precio:<strong>{{$datos['price']}}</strong>

## Recuerde que de no enviarse el comprobante de pago/transferencia con todos los datos de la operación al mail uncoactiva@gmail.com, no se considerará como inscripto.
    
@endcomponent
