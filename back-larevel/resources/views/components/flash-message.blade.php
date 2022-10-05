@if (session()->has('message'))
    <div x-data="{show: true}"
        x-init="setTimeout(() => show = false, 3000)"
        x-show="show"
        class="fixed top-16 z-50 left-1/2 transform -translate-x-1/2 justify-self-center bg-yellow text-gray-darker font-semibold px-3 py-3">
        <p>{{session('message')}}</p>
    </div>
@endif