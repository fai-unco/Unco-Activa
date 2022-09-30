<x-layout>
    <div class='bg-pre min-h-screen py-7 px-2 sm:px-10 md:px-10 xl:px-32 bg-gray-darker'>
      <div class='justify-center bg-gray-light rounded-lg pb-2  w-full'>
        <h1 class='flex justify-center text-[1.5rem] sm:text-[2rem] font-Hurme-Geometric-BO text-blue-dark py-5 font-bold italic w-full'>PRE-INSCRIPTOS</h1>
        <div class='overflow-x-auto pb-5'>
          <div class='px-3 font-Hurme-Geometric-BO italic font-bold'>
            <p class='text-blue-high'>Cupos Disponibles:</p>
              @foreach ($categories as $categorie)
                <span >{{$categorie->name}}</span>:
                <span class='font-Hurme-Geometric-N px-1'>{{$categorie->quotas}}</span>
              @endforeach
          </div>
          <table class='font-Hurme-Geometric-N w-full'>
            <thead>
              <tr class='font-Hurme-Geometric-BO italic text-blue-dark'>
                <th class='px-3'>#</th>
                <th class='px-3'>#CATEGORIA</th>
                <th class='px-3'>NOMBRE APELLIDO</th>
                <th class='px-3'>DNI</th>
                <th class='px-3'>ARCHIVOS</th>
                <th class='px-3'>EMAIL</th>
                <th class='px-3'>OPCIONES</th>
              </tr>
            </thead>
            <tbody>
              @foreach ($preInscriptions as $preInscription)
                @if(!$preInscription->billing_verified_at)
                  <tr key={PreInscription.unic} class='bg-gray border-y border-blue-cyan '>
                    <td class='px-3'>
                      {{$preInscription->id}}
                    </td>
                    <td class='px-3' >
                      {{$preInscription->categorie_name}}
                    </td>
                    <td class='px-3' >
                      {{$preInscription->name}} {{$preInscription->surname}}
                    </td>
                    <td class='px-3' >
                      {{$preInscription->dni}}
                    </td>
                    <td class='px-3' >
                      <div class="grid">
                        <a class="text-blue-high hover:text-board text-base font-semibold " 
                          href="{{asset($preInscription->files)}}"
                          target="_blank">Comprobate</a>
                        @if($preInscription->promo)
                          <a class="text-blue-high hover:text-board text-base font-semibold "
                            href="{{asset($preInscription->promo)}}"
                            target="_blank">Certificado
                          </a>
                        @else
                          <p>Sin Promo</p>
                        @endif
                      </div>
                    </td>
                    <td class='px-3' >
                      {{$preInscription->email}}
                    </td>
                    <td class='flex justify-center px-3'>
                      <a href="inscription/{{$preInscription->id}}">
                        <button class="bg-board text-gray-light mx-1 px-2 my-1 rounded-full">aceptar</button>
                      </a>
                      <a href="inscriptionDelete/{{$preInscription->id}}">
                        <button class="bg-yellow text-gray-darker mx-1 px-2 my-1 rounded-full">rechazar</button>
                      </a>
                    </td>
                  </tr>
                @endif
              @endforeach
            </tbody>
          </table>
        </div>
      </div>
      <div class='justify-center bg-gray-light rounded-lg pb-2 my-7'>
        <h1 class='flex justify-center text-[1.5rem] sm:text-[2rem] font-Hurme-Geometric-BO font-bold italic text-blue-dark py-5'>INSCRIPTOS</h1>
        <div class='overflow-x-auto pb-5'>
          <table class='font-Hurme-Geometric-N w-full px-1'>
            <thead>
              <tr class='font-Hurme-Geometric-BO italic text-blue-dark'>
                <th class='px-3'>#</th>
                <th class='px-3'>#CATEGORIA</th>
                <th class='px-3'>NOMBRE APELLIDO</th>
                <th class='px-3'>DNI</th>
                <th class='px-3'>TELEFONO</th>
                <th class='px-3'>EMAIL</th>
                <th class='px-3'>OPCIONES</th>
              </tr>
            </thead>
            <tbody>
              @foreach ($preInscriptions as $preInscription)
                @if($preInscription->billing_verified_at)
                  <tr key={PreInscription.unic} class='bg-gray border-y border-blue-cyan '>
                    <td class='px-3'>
                      {{$preInscription->id}}
                    </td>
                    <td class='px-3' >
                      {{$preInscription->categorie_name}}
                    </td>
                    <td class='px-3' >
                      {{$preInscription->name}} {{$preInscription->surname}}
                    </td>
                    <td class='px-3' >
                      {{$preInscription->dni}}
                    </td>
                    <td class='px-3' >
                      {{$preInscription->phone}}
                    </td>
                    <td class='px-3' >
                      {{$preInscription->email}}
                    </td>
                    <td class='flex justify-center px-3'>
                      <a href="inscription/{{$preInscription->id}}">
                        <button class='bg-board text-gray-light mx-1 px-2 my-1 rounded-full'>
                              Desinscribir
                        </button>
                      </a>
                    </td>
                  </tr>
                @endif
              @endforeach
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </x-layout>