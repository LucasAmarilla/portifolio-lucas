import { A } from "@solidjs/router";

export default function Nav(props: any) {
    return <>


        <div class="flex items-center absolute left-1/2 -translate-x-1/2 rounded-full bg-white/75 bg-gradient-to-r from-sky-200/40 via-sky-200/40 to-sky-200/40 border border-white/50 px-3 text-sm font-medium text-gray-800 shadow-lg shadow-gray-800/5 ring-1 ring-gray-800/[.075] backdrop-blur-xl my-4">

            <A class="flex-none group relative block transition duration-300 px-3 py-2.5 hover:text-sky-600" href="https://lucasamarilla.github.io/portifolio-lucas/">
                Me
                <span class="absolute inset-x-1 h-px bg-gradient-to-r from-sky-500/0 from-10% via-sky-400 to-sky-500/0 to-90% transition duration-300 -bottom-0.5 opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100">
                </span>
                <span class="overflow-hidden absolute inset-0 transition origin-bottom duration-300 opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100">
                    <span class="absolute inset-x-4 -bottom-2 h-full bg-gradient-to-t from-sky-500/20 to-transparent blur rounded-t-full">
                    </span>
                </span>
            </A>
            <a class="flex-none group relative block transition duration-300 px-3 py-2.5 hover:text-sky-600" href="https://lucasamarilla.github.io/portifolio-lucas/projects">
                My projects
                <span class="absolute inset-x-1 h-px bg-gradient-to-r from-sky-500/0 from-10% via-sky-400 to-sky-500/0 to-90% transition duration-300 -bottom-0.5 opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100">
                </span>
                <span class="overflow-hidden absolute inset-0 transition origin-bottom duration-300 opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100">
                    <span class="absolute inset-x-4 -bottom-2 h-full bg-gradient-to-t from-sky-500/20 to-transparent blur rounded-t-full">
                    </span>
                </span>
            </a>

        </div>

        <div>
            {props.children}
        </div>
    </>
}