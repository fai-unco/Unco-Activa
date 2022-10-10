@component('mail::message')
<p>Hola {{ $datos['name'] }}! muchas gracias por su paciencia. Estamos dando lo máximo para que tenga la mejor atención.</p>

<p>Tenemos el agrado de informarte que los requisitos que nos proporcionaste han sido verificados y aprobados!</p>

<h1>{{ $datos['name'] }} YA ESTAS INSCRIPTO/A A LA CARRERA POR LOS 50 AÑOS DE LA UNCO!.</h1>

<p style="text: ">
    <b>Corredor/a: {{ $datos['name'] }} <br />
    Categoria: {{ $datos['categoriename'] }}</b>
</p>

<p>
    <b>Si tiene dudas con el recorrido, premiación, o necesita más información,  en el transcurso de espera a la fecha de la carrera estaremos actualizando el sitio <a href="https://uncoactiva.fi.uncoma.edu.ar/">unco activa</a> para su comodidad.</b>
</p>
@endcomponent
