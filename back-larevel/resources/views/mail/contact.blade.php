@component('mail::message')
 
# Hola!!. Se ha generado una consulta desde la seccion *contactanos* del sitio UNCO ACTIVA
---
># Datos del remitente       
* Email : {{ $contacto['email'] }}  
* Asunto: {{ $contacto['subject'] }}  
---
### Mensaje:
@component('mail::panel')

{{$contacto['message']}}
@endcomponent

        
@endcomponent