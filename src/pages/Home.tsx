import { createSignal, Show } from "solid-js";
import Avatar from "../components/Avatar";
import DownArrow from "../components/DownArrow";
import { SolidTyper } from "solid-typer";
import Achivement from "../components/Achivement";
import Tool from "../components/Tool";
import { A } from "@solidjs/router";
import Footer from "../components/Footer";

export default function Home() {
    const [done, setDone] = createSignal(false);
    return <>
        <div class="container mx-auto font-main">
            <div class="mx-auto">
                <div class="grid grid-cols-1 md:grid-cols-2">
                    <div class="flex items-center h-screen">
                        <div class="m-auto">
                            <h2 class="text-4xl font-light">Bem vindo(a), eu sou</h2>
                            <h1 class="text-6xl font-bold">Lucas</h1>
                            <h3 class="font-semibold text-2xl text-sky-600"><SolidTyper
                                text={[
                                    "Front-end dev",
                                    "FullStack",
                                    "Automation",
                                    "Data",
                                    "TechLover ♥️",
                                ]}
                                backspaceSpeed={28}
                                typingSpeed={68}
                                cursor={true}
                                typingPause={400}
                                onFinish={() => { setDone(true) }}
                            /></h3>
                        </div>
                    </div>
                    <div class="mx-auto md:block hidden">
                        <div class="flex h-screen">
                            <Avatar />
                        </div>
                    </div>
                </div>
            </div>
            <Show when={done() === true}>
                <DownArrow />
            </Show>
            <div id="more" class="container mt-10">
                <div class="text-center">
                    <h1 class="font-bold text-4xl">Quem sou eu?</h1>
                    <h3 class="my-4 px-20 font-medium">Sou um jovem profissional e apaixonado por tecnologia, com uma base técnica e acadêmica sólida. Minha jornada começou em 2017 com um curso técnico em Informática, onde adquiri conhecimentos em manutenção de computadores, redes, além de desenvolvimento em Java, tecnologias web e mobile. Atualmente, estou cursando Sistemas para Internet, que é minha principal área de interesse, embora eu sempre acabe atuando em diferentes campos dentro da tecnologia. Sou proativo, colaborativo e gosto de enfrentar novos desafios.</h3>
                    <h3 class="my-4 px-20 font-medium">Além da área de TI, possuo certificados de inglês avançado pela CaMLA(B2) e pela ILAC - Vancouver(level 13 - advanced english), o que me permite atuar em ambientes multiculturais. Meu foco é concluir a graduação e continuar evoluindo na carreira de computação, sempre buscando aprender e crescer continuamente.</h3>
                </div>
            </div>
            <div class="mt-20 ">
                <div class="grid md:grid-cols-2 grid-cols-1">
                    <div class="text-center">
                        <h1 class="font-semibold text-2xl">Formaçao academica</h1>
                        <Achivement title="B2 English Level" year="Mar 2012 - Dez 2018" school="Fisk English School" icon="world" />
                        <Achivement title="Técnico em informatica" year="Jan 2017 - Dez 2020" school="IFMS" icon="computer" />
                        <Achivement title="Level 13 English Level" year="Jun 2018 - Jul 2018" school="ILAC Vancouver" icon="world" />
                        <Achivement title="Sistemas para internet" year="Jan 2022 - Jan 2025" school="IFMS" icon="net" />

                    </div>
                    <div class="text-center md:mt-0 mt-14">
                        <h1 class="font-semibold text-2xl">Experiencia profissional</h1>
                        <Achivement title="Estagiario de laboratorio" year="Fev 2019 - Jul 2019" school="IFMS" icon="computer" />
                        <Achivement title="Monitor de banco de dados" year="Ago 2019 - Dec 2019" school="IFMS" icon="db" />
                        <Achivement title="Pesquisador" year="Ago 2019 - Ago 2020" school="CNPq" icon="search" />
                        <Achivement title="Analista de TI" year="Mar 2021 - Dez 2021" school="Comercial Manduvi S.A" icon="computer" />
                        <Achivement title="Estagiario" year="May 2023 - Atualmente" school="AEGEA Sanemaento" icon="water" />
                    </div>
                </div>
            </div>

            <div class="text-center mt-28">
                <h1 class="font-bold text-4xl">Principais ferramentas</h1>
                <div class="container flex flex-row gap-8 flex-wrap mt-10 md:px-44">
                    <div class="md:w-44 md:h-48 h-38 rounded-xl bg-sky-600 text-white transition hover:scale-110 hover:-translate-y-1 mx-auto">
                        <Tool icon="javascript" showName={true} size="120" />
                    </div>
                    <div class="md:w-44 md:h-48 h-38 rounded-xl bg-sky-600 text-white transition hover:scale-110 hover:-translate-y-1 mx-auto">
                        <Tool icon="php" showName={true} size="120" />
                    </div>
                    <div class="md:w-44 md:h-48 h-38 rounded-xl bg-sky-600 text-white transition hover:scale-110 hover:-translate-y-1 mx-auto">
                        <Tool icon="python" showName={true} size="120" />
                    </div>
                    <div class="md:w-44 md:h-48 h-38 rounded-xl bg-sky-600 text-white transition hover:scale-110 hover:-translate-y-1 mx-auto">
                        <Tool icon="java" showName={true} size="120" />
                    </div>
                    <div class="md:w-44 md:h-48 h-38 rounded-xl bg-sky-600 text-white transition hover:scale-110 hover:-translate-y-1 mx-auto">
                        <Tool icon="laravel" showName={true} size="120" />
                    </div>
                    <div class="md:w-44 md:h-48 h-38 rounded-xl bg-sky-600 text-white transition hover:scale-110 hover:-translate-y-1 mx-auto">
                        <Tool icon="spring" showName={true} size="120" />
                    </div>
                    <div class="md:w-44 md:h-48 h-38 rounded-xl bg-sky-600 text-white transition hover:scale-110 hover:-translate-y-1 mx-auto">
                        <Tool icon="react" showName={true} size="120" />
                    </div>
                    <div class="md:w-44 md:h-48 h-38 rounded-xl bg-sky-600 text-white transition hover:scale-110 hover:-translate-y-1 mx-auto">
                        <Tool icon="solidjs" showName={true} size="120" />
                    </div>
                    <div class="md:w-44 md:h-48 h-38 rounded-xl bg-sky-600 text-white transition hover:scale-110 hover:-translate-y-1 mx-auto">
                        <Tool icon="pgsql" showName={true} size="120" />
                    </div>
                    <div class="md:w-44 md:h-48 h-38 rounded-xl bg-sky-600 text-white transition hover:scale-110 hover:-translate-y-1 mx-auto">
                        <Tool icon="turso" showName={true} size="120" />
                    </div>
                    <div class="md:w-44 md:h-48 h-38 rounded-xl bg-sky-600 text-white transition hover:scale-110 hover:-translate-y-1 mx-auto">
                        <Tool icon="drizzle" showName={true} size="120" />
                    </div>
                    <div class="md:w-44 md:h-48 h-38 rounded-xl bg-sky-600 text-white transition hover:scale-110 hover:-translate-y-1 mx-auto">
                        <Tool icon="tailwind" showName={true} size="120" />
                    </div>
                    <div class="md:w-44 md:h-48 h-38 rounded-xl bg-sky-600 text-white transition hover:scale-110 hover:-translate-y-1 mx-auto">
                        <Tool icon="github" showName={true} size="120" />
                    </div>
                </div>
            </div>
            <div class="w-full flex my-20">
                <div class="mx-auto text-center">
                    <p class="mb-5"></p>
                    <A href="/projects" class="text-xl text-white transition ease-in-out delay-150 bg-sky-600 hover:bg-sky-700 hover:-scale-x-150 duration-300 rounded-2xl p-4 mt-20">
                        Confira alguns dos meus projetos
                    </A>
                </div>
            </div>
        </div >
        <Footer />

    </>

}