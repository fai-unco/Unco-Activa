@component('mail::message')
 
# Hola!!. Se ha generado una consulta desde la seccion *contactanos* del sitio UncoActiva
---
># Datos del remitente

* Nombre: {{ $mensaje }}        
* Email : {{ $sujeto }}  
        
@endcomponent