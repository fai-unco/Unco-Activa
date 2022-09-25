<x-layout>
    <x-card class="p-10 max-w-lg mx-auto my-20 border border-gray rounded">
        <header class="text-center">
            <h2 class="text-2xl font-bold uppercase italic mb-1">
                Iniciar sesion
            </h2>
            <p class="mb-4">Inicia sesión en tu cuenta para verificar preinscriptos</p>
        </header>

        <form method="POST" action="/users/authenticate">
            @csrf
            

            <div class="mb-6">
                <label for="email" class="inline-block text-lg mb-2"
                    >Correo Electronico</label
                >
                <input
                    type="email"
                    class="border border-gray-200 rounded p-2 w-full"
                    name="email" value="{{old('email')}}"
                />
                @error('email')
                <p class="text-red-500 text-xs mt-1">{{$message}}</p>
                @enderror
            </div>

            <div class="mb-6">
                <label
                    for="password"
                    class="inline-block text-lg mb-2"
                >Contraseña</label>
                <input
                    type="password"
                    class="border border-gray-200 rounded p-2 w-full"
                    name="password" value="{{old('password')}}"
                />
                @error('password')
                <p class="text-red-500 text-xs mt-1">{{$message}}</p>
                @enderror
            </div>

            <div class="mb-6">
                <button
                    type="submit"
                    class="bg-board text-gray-light rounded py-2 px-4 hover:bg-yellow hover:text-gray-darker">
                Sign In
                </button>
            </div>

            {{-- <div class="mt-8">
                <p>
                    olvidaste tu cuenta?
                    <a href="/register" class="text-laravel">Register</a>
                </p>
            </div> --}}
        </form>
    </x-card>
</x-layout>