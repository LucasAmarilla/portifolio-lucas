import { BiLogosInstagram, BiLogosTwitter, BiLogosGithub, BiLogosTwitch } from 'solid-icons/bi'

export default function Footer() {
    return <>
        <div class="h-44 w-[100%] bg-sky-600 mt-20 grid md:grid-cols-2 text-white">
            <div class="text-center mx-auto content-center">
                <h1 class="text-5xl font-bold">{"<Yellow/>"}</h1>
                <p class="font-thin text-2xl">software</p>
            </div>
            <div class="w-full content-center hidden md:block mx-auto text-center">
                <h3 class="text-2xl font-bold">Me siga {":)"}</h3>
                <ul class="flex justify-center gap-5 my-2">
                    <li class='hover:bg-white hover:text-sky-600 rounded-xl transition ease-in'><a href=""><BiLogosInstagram size={40} /></a></li>
                    <li class='hover:bg-white hover:text-sky-600 rounded-xl'><a href=""><BiLogosTwitter size={40} /></a></li>
                    <li class='hover:bg-white hover:text-sky-600 rounded-xl'><a href=""><BiLogosTwitch size={40} /></a></li>
                    <li class='hover:bg-white hover:text-sky-600 rounded-xl'><a href=""><BiLogosGithub size={40} /></a></li>


                </ul>
            </div>
        </div>
    </>
}