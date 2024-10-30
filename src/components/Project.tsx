import { Show } from "solid-js";
import Tool from "./Tool"
import { A } from "@solidjs/router";

interface projectsProps {
    title: string,
    desc: string,
    date: string,
    techString: string,
    hasLink: boolean,
    link: string,
    repo: string,
}

export default function Project(props: projectsProps) {
    const techs = props.techString.split("|");

    return <>
        <div class="bg-sky-600 w-64 h-[17rem] rounded-lg text-white text-wrap">
            <div class="mt-3">
                <div class="grid grid-cols-2 w-full">
                    <div class="text-start">
                        <h1 class="px-4 font-semibold pt-4">{props.title}</h1>
                        <h3 class="px-4 font-medium pt-[0.1rem]">{props.date}</h3>
                    </div>
                    <A target="_blank" href={props.repo} class="place-items-end text-center mr-3">
                        <div class="px-2 rounded">
                            <Tool icon="github" showName={false} size="30" />
                        </div>
                    </A>
                </div>
                <h3 class="px-4 font-light md:font-thin text-center pt-4">{props.desc}</h3>
                <p class="text-center mt-1">Stack</p>
                <div class="-mt-2 gap-3 flex justify-center flex-wrap flex-row">
                    {techs.map((tech) => <Tool icon={tech} showName={false} size="35" />)}
                </div>
                <div class="flex mt-2">
                    <Show when={props.hasLink}>
                        <a href={props.link} class="text-blue-200 hover:bg-white hover:text-sky-500 mx-auto p-1 rounded-lg">Veja o projeto</a>
                    </Show>
                </div>
            </div>
        </div>
    </>
}