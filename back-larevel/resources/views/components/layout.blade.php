<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="logos/logoUNCOactiva.png" />
        <link rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
            integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
            crossorigin="anonymous"
            referrerpolicy="no-referrer"/>

        <link rel="stylsheet" type="text/css" href="{{ URL::asset('/') }}css/styles.css" />
        <script src="//unpkg.com/alpinejs" defer></script>
        <script src="https://cdn.tailwindcss.com"></script>
        <style>
            .bg-unco{
                min-width: 320px;
                min-height: 100vh;
                background-repeat: no-repeat, repeat;
                background-size: cover;
                background-position: center;
                background-Image:linear-gradient(44.67deg, rgb(69, 149, 214) 0%, rgba(68, 107, 132, 0.85) 17.4%, rgba(124, 136, 116, 0.85) 42.63%, rgba(164, 132, 81, 0.801) 72.45%, rgba(199, 127, 55, 0.883) 100%), url('../../Fondo1.png');
            }

            .bg-pre{
                min-width: 320px;
                min-height: 100vh;
                background-repeat: no-repeat, repeat;
                background-size: cover;
                background-position: center;
                background-Image:linear-gradient(44.67deg, rgb(69, 149, 214) 0%, rgba(68, 107, 132, 0.85) 17.4%, rgba(124, 136, 116, 0.85) 42.63%, rgba(164, 132, 81, 0.801) 72.45%, rgba(199, 127, 55, 0.883) 100%), url('Fondo1.png');
            }
        </style>
        <script>
            tailwind.config = {
                theme: {
                    extend: {
                        colors: {
                            'yellow': '#EBA51E',        
                            'blue-high': '#006E91',
                            'blue-dark': '#00375A',
                            'blue-cyan': '#00AAE1',
                            // 'blue-h': '#023859',
                            'board': '#782332',
                            'gray-light': '#E6E6E6',
                            'gray': '#D2D3D5',
                            'gray-dark': '#606062',
                            'gray-darker': '#27272a'
                        },
                    },
                },
            };
        </script>
        <title>Unco Activa</title>
    </head>
    <body>
        <nav class="bg-gray-darker h-16 sticky top-0 shadow-lg text-gray z-50">
			<div class="px-2 sm:px-6">
				<div class="flex justify-between">
					<div class="flex items-center space-x-7 h-16">
						<div>
							<!-- Website Logo -->
							<a href="/">
                                <img class="w-16" src="{{asset('logos/logoUNCOactiva.png')}}" alt="logo unco activa" />
                            </a>
						</div>
						<!-- Primary Navbar items -->
						<div class="hidden md:flex items-center space-x-1">
							<a href="/" class="py-4 px-2 hover:text-blue-cyan hover:border-blue-cyan font-semibold " :active="request()->routeIs('index')">Inicio</a>
                            @auth
                                <a href="/pre-inscripciones" class="py-4 px-2 font-semibold hover:text-blue-cyan transition duration-300">Pre-inscripciones</a>
                                <a href="/inscripciones" class="py-4 px-2 font-semibold hover:text-blue-cyan transition duration-300">Inscripciones</a>
                                <a href="/pre-inscripciones-rechazadas" class="py-4 px-2 font-semibold hover:text-blue-cyan transition duration-300">Rechazadas</a>
                            @endauth
                        </div>
					</div>
					<!-- Secondary Navbar items -->
					<div class="hidden md:flex items-center space-x-3 ">
                        @auth
                            <a href="/logout" class="font-medium text-gray-500 hover:text-blue-cyan transition duration-300">
                                <i class="fa-solid fa-door-closed"></i>Cerrar Sesion
                            </a>
                        @else
                            <a href="/login" class="font-medium text-gray-500 hover:text-blue-cyan transition duration-300">
                                <i class="fa-solid fa-arrow-right-to-bracket"></i>Ingresar
                            </a>
                        @endauth
					</div>
					<!-- Mobile menu button -->
					<div class="md:hidden flex items-center h-16 text-gray-high">
						<button class="outline-none mobile-menu-button rounded-[3px] p-[1px] hover:bg-gray-light hover:text-gray-darker focus:bg-gray-light focus:text-gray-darker">
						<svg class=" w-6 h-6"
							x-show="!showMenu"
							fill="none"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path d="M4 6h16M4 12h16M4 18h16"></path>
						</svg>
					</button>
					</div>
				</div>
			</div>
			<!-- mobile menu -->
			<div class="hidden mobile-menu bg-gray-darker ">
				<ul class="border-t border-gray-high">
					<li class="active"><a href="/" class="block text-sm px-2 py-4 text-gray-light hover:text-gray-darker hover:bg-blue-cyan font-semibold">Inico</a></li>
					@auth
                    <li><a href="/pre-inscripciones" class="border-t border-gray-high block text-sm px-2 py-4 hover:text-gray-darker hover:bg-blue-cyan font-semibold transition duration-300">Pre-inscripciones</a></li>
					<li><a href="/inscripciones" class="border-t border-gray-high block text-sm px-2 py-4 hover:text-gray-darker hover:bg-blue-cyan transition font-semibold duration-300">Incripciones</a></li>
					<li><a href="/pre-inscripciones-rechazadas" class="border-t border-gray-high block text-sm px-2 py-4 hover:text-gray-darker hover:bg-blue-cyan font-semibold transition duration-300">Pre-inscripciones Rechazadas</a></li>
                    <li><a href="/logout" class="border-t-2 border-gray-high block text-sm px-2 py-4 hover:text-gray-darker hover:bg-blue-cyan font-semibold transition duration-300">Cerrar Sesion</a></li>
                    @else
                    <li><a href="/login" class="border-t border-gray-high block text-sm px-2 py-4 hover:text-gray-darker hover:bg-blue-cyan font-semibold transition duration-300">Ingresar</a></li>
                    @endauth
                </ul>
			</div>
			<script>
				const btn = document.querySelector("button.mobile-menu-button");
				const menu = document.querySelector(".mobile-menu");

				btn.addEventListener("click", () => {
					menu.classList.toggle("hidden");
				});
			</script>
		</nav>

        <main>
            {{$slot}}
        </main>

        {{-- FOOTER --}}
        <footer class="bottom-0 left-0 w-full flex items-center justify-center font-semibold bg-[#27272a] text-white h-24 md:justify-center">
        <p class="ml-2">Copyright &copy; | Unco Activa</p>

        </footer>

        <x-flash-message />

    </body>
</html>

