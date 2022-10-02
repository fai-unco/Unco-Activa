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
                background-Image:linear-gradient(44.67deg, rgb(69, 149, 214) 0%, rgba(68, 107, 132, 0.85) 17.4%, rgba(124, 136, 116, 0.85) 42.63%, rgba(164, 132, 81, 0.801) 72.45%, rgba(199, 127, 55, 0.883) 100%), url('BG_04.png');
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
        <nav class="flex justify-between items-center h-16 sticky top-0 z-50 bg-gray-darker text-gray-light">
            <div class="flex items-center">
            <a href="/">
                <img class="ml-2 sm:ml-6 w-16" src="{{asset('logos/logoUNCOactiva.png')}}" alt="logo unco activa" />
            </a>
            </div>
            <ul class="flex space-x-6 mr-2 sm:mr-6 text-sm sm:text-lg">
                @auth
                <li>
                    <a href="/pre-inscripciones" class="hover:text-gray  border-b-2 hover:border-blue-cyan ">
                        Pre-iscripciones
                    </a>
                </li>
                <li>
                    <a href="/inscripciones" class="hover:text-gray  border-b-2 hover:border-blue-cyan ">
                        Inscripciones
                    </a>
                </li>
                <li>
                    <a href="/logout" class="hover:text-gray border-b-2 hover:border-blue-cyan">
                        <i class="fa-solid fa-door-closed"></i>Cerrar Sesion
                    </a>
                </li>
                @else
                <li>
                    <a href="/login" class="hover:text-gray border-b-2 hover:border-blue-cyan"
                        ><i class="fa-solid fa-arrow-right-to-bracket"></i>
                        Iniciar Sesion</a
                    >
                </li>
                @endauth
            </ul>
        </nav>

        <main>
            {{$slot}}
        </main>

        {{-- FOOTER --}}
        <footer class="bottom-0 left-0 w-full flex items-center justify-center font-semibold bg-[#27272a] text-white h-24 md:justify-center">
        <p class="ml-2">Copyright &copy; | Unco Activa</p>

        </footer>

        {{-- <x-flash-message /> --}}

    </body>
</html>

