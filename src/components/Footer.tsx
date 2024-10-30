import { BiLogosInstagram, BiLogosTwitter, BiLogosGithub, BiLogosTwitch } from 'solid-icons/bi'

export default function Footer() {
    return <>
        <div class="h-52 md:h-44 w-[100%] bg-sky-600 mt-20 grid md:grid-cols-2 text-white">
            <div class="text-center mx-auto content-center">
                <h1 class="text-5xl font-bold">{"<Yellow/>"}</h1>
                <p class="font-thin text-2xl">software</p>
                <div class="w-full content-center md:hidden mx-auto text-center">
                    <h3 class="text-lg font-bold">Entre em contato {":)"}</h3>
                    <p class='font-medium'>lucas.amarilla@icloud.com</p>
                    <ul class="flex justify-center gap-5 my-2">
                        <li class='hover:bg-white hover:text-sky-600 rounded-xl transition ease-in'><a href="https://www.instagram.com/dev.amarilla"><BiLogosInstagram size={40} /></a></li>
                        <li class='hover:bg-white hover:text-sky-600 rounded-xl transition ease-in'><a href="https://x.com/LucasP1ka2"><BiLogosTwitter size={40} /></a></li>
                        <li class='hover:bg-white hover:text-sky-600 rounded-xl transition ease-in'><a href="https://www.twitch.tv/lucasp1ka2"><BiLogosTwitch size={40} /></a></li>
                        <li class='hover:bg-white hover:text-sky-600 rounded-xl transition ease-in'><a href="https://github.com/LucasAmarilla"><BiLogosGithub size={40} /></a></li>


                    </ul>
                </div>

            </div>
            <div class="w-full content-center hidden md:block mx-auto text-center">
                <h3 class="text-2xl font-bold">Entre em contato {":)"}</h3>
                <p class='font-medium'>lucas.amarilla@icloud.com</p>
                <ul class="flex justify-center gap-5 my-2">
                    <li class='hover:bg-white hover:text-sky-600 rounded-xl transition ease-in'><a target="_blank" href="https://www.instagram.com/dev.amarilla" ><BiLogosInstagram size={40} /></a></li>
                    <li class='hover:bg-white hover:text-sky-600 rounded-xl transition ease-in'><a target="_blank" href="https://x.com/LucasP1ka2"><BiLogosTwitter size={40} /></a></li>
                    <li class='hover:bg-white hover:text-sky-600 rounded-xl transition ease-in'><a target="_blank" href="https://www.twitch.tv/lucasp1ka2"><BiLogosTwitch size={40} /></a></li>
                    <li class='hover:bg-white hover:text-sky-600 rounded-xl transition ease-in'><a target="_blank" href="https://github.com/LucasAmarilla"><BiLogosGithub size={40} /></a></li>
                </ul>
            </div>
        </div>
    </>
}