import Project from "../components/Project";
import projetosFront from "../assets/frontendProjs";
import projetosFull from "../assets/fullStackProjs";
import projetosMob from "../assets/mobileProjs";
import Footer from "../components/Footer";



export default function Projects() {
    return <>
        <div class="w-full container pt-24 font-main">
            <h1 class="pl-10 font-light mb-6 text-2xl">Meus pricipais projetos</h1>
            <h2 class="pl-10 font-bold text-2xl">Front-end</h2>
            <div class="flex flex-row gap-6 mt-5 px-4 overflow-x-auto w-screen mx-auto">
                {Object.values(projetosFront).map((projeto) => (
                    <div class="flex-shrink-0 min-w-[100px] mb-2">
                        <Project
                            title={projeto.nome}
                            desc={projeto.desc}
                            date={projeto.date}
                            techString={projeto.techString}
                            hasLink={projeto.hasLink}
                            link={projeto.link}
                            repo={projeto.repo}
                        />
                    </div>
                ))}

            </div>

            <h2 class="pl-10 font-bold text-2xl mt-4">Fullstack</h2>
            <div class="flex flex-row gap-6 mt-5 px-4 overflow-x-auto w-screen mx-auto">
                {Object.values(projetosFull).map((projeto) => (
                    <div class="flex-shrink-0 min-w-[100px] mb-2">
                        <Project
                            title={projeto.nome}
                            desc={projeto.desc}
                            date={projeto.date}
                            techString={projeto.techString}
                            hasLink={projeto.hasLink}
                            link={projeto.link}
                            repo={projeto.repo}


                        />
                    </div>
                ))}
            </div>

            <h2 class="pl-10 font-bold text-2xl mt-4">Mobile/RPA</h2>
            <div class="flex flex-row gap-6 mt-5 px-4 overflow-x-auto w-screen mx-auto">
                {Object.values(projetosMob).map((projeto) => (
                    <div class="flex-shrink-0 min-w-[100px] mb-2">
                        <Project
                            title={projeto.nome}
                            desc={projeto.desc}
                            date={projeto.date}
                            techString={projeto.techString}
                            hasLink={projeto.hasLink}
                            link={projeto.link}
                            repo={projeto.repo}

                        />
                    </div>
                ))}
            </div>
        </div >
        <Footer />
    </>
}