<link rel="stylsheet" type="text/css" href="{{ URL::asset('/') }}css/styles.css" />
<x-layout>
    <div class="bg-unco min-h-screen flex flex-col justify-center sm:justify-center items-center sm:pt-0">
        <x-card class="max-w-md px-6 sm:px-6 py-4 shadow-md overflow-hidden rounded-lg">
            <header class="text-center grid justify-center">
                <img src='logos/UNCO_Activa.png' alt='logo unco activa' className="py-6 flex justify-center" />
                <h2 class="text-sm font-bold italic py-5">Iniciar sesion</h2>
            </header>

            <form method="POST" action="/users/authenticate">
                {{-- @csrf --}}
                {{ csrf_field() }}
                <div class="grid">
                    <label for="email" class="inline-block text-lg"
                        >Correo Electronico</label
                    >
                    <input
                        type="email"
                        class="py-2 w-full mt-1 h-[34px] rounded-full shadow-sm border
                        focus:border-blue-cyan focus:ring focus:ring-blue-cyan focus:ring-opacity-50 "
                        name="email" value="{{old('email')}}"
                    />
                    @error('email')
                    <p class="text-red-500 text-xs mt-1">{{$message}}</p>
                    @enderror
                </div>

                <div class="grid pt-2">
                    <label
                        for="password"
                        class="inline-block text-lg "
                    >Contraseña</label>
                    <input
                        type="password"
                        placeholder=""
                        class="py-2 mt-1 w-full h-[34px] rounded-full shadow-sm border
                        focus:border-blue-cyan focus:ring focus:ring-blue-cyan focus:ring-opacity-50"
                        name="password" value="{{old('password')}}"
                    />
                    @error('password')
                    <p class="text-red-500 text-xs mt-1">{{$message}}</p>
                    @enderror
                </div>
                @error('credenciales')
                    <p class="text-red-500 text-xs mt-1">{{$message}}</p>
                    @enderror
                <div class="pt-5">
                    <button
                        type="submit"
                        class="bg-board text-gray-light rounded-full py-2 px-4 hover:bg-yellow hover:text-gray-darker w-full">
                        Iniciar Sesion
                    </button>
                </div>
            </form>
        </x-card>
    </div>
</x-layout>