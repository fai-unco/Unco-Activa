<tr>
<td class="header">
<a href="{{ config('app.frontend_url')}}" style="display: inline-block;">
@if (trim($slot) === 'Laravel')
<img src="https://i.imgur.com/gmXbLh6.png class="logo" alt="UncoActiva logo Logo">
@else
{{ $slot }}
@endif
</a>
</td>
</tr>
