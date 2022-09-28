@component('mail::message')
# Hola {{ $datos['name'] }}! muchas gracias por inscribirte en la carrera por los 50 años de la UNCO.
    ---

### Por favor espera mientras revisamos la información de tu inscripcion, te notificaremos una vez este corroborada la informacion de los comprobantes.

## Si aun no hiciste la trasnferencia, los de facturacion datos son:

>### Banco Credicoop Cooperativo Limitado 
>### Adherente: Universidad Nacional del Comahue.
>### Operador: 549505 Roberto Antonio Sepulveda.
>### Nro Cuenta – Cuenta Corriente: $191-093-024908/9
>### CBU 19100933-55009302490896 
>### Categoria:<strong>{{$datos['categoriename']}}</strong>
>### Precio:<strong>{{$datos['price']}}</strong>

## Recuerde que de no enviarse el comprobante de pago/transferencia con todos los datos de la operación al mail uncoactiva@gmail.com, no se considerará como inscripto.
    
@endcomponent
