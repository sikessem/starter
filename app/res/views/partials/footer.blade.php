<footer class="bg-slate-900 text-slate-100 dark:bg-slate-100 dark:text-slate-900 px-2 py-4 border-t-2 border-t-slate-500">
    <p class="text-center text-sm font-bold">
        <a href="https://github.com/sikessem/" class="inline-flex items-center hover:underline space-x-2">
            <span title="{{ config('app.name', 'Sikessem') }}" style="content:url('{{ asset('mark.png') }}')" class="h-4 w-4">
                {{ config('app.name', 'Sikessem') }}
            </span>
            <span>
                Copyright &copy; {{ date('Y') }}
            </span>
        </a>
    </p>
</footer>