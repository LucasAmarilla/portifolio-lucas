import { BiLogosReact, BiLogosJava } from 'solid-icons/bi'
import { SiPostgresql, SiPhp, SiLaravel, SiSpring, SiSvelte, SiPython, SiJavascript, SiTailwindcss, SiGithub } from 'solid-icons/si'
import { TbBrandSolidjs } from 'solid-icons/tb'
import Turso from '../assets/turso2.png';
import Drizzle from '../assets/drizzle.png';

import { Show } from 'solid-js';

export default function Tool(props: { icon: string, showName: boolean }) {
    const renderIcon = () => {
        switch (props.icon) {
            case 'php':
                return <SiPhp size={120} class="mx-auto mt-5 scale-75 md:scale-100" />;
            case 'javascript':
                return <SiJavascript size={120} class="mx-auto mt-5 scale-75 md:scale-100" />;
            case 'python':
                return <SiPython size={120} class="mx-auto mt-5 scale-75 md:scale-100" />;
            case 'java':
                return <BiLogosJava size={120} class="mx-auto mt-5 scale-75 md:scale-100" />;
            case 'spring':
                return <SiSpring size={120} class="mx-auto mt-5 scale-75 md:scale-100" />;
            case 'laravel':
                return <SiLaravel size={120} class="mx-auto mt-5 scale-75 md:scale-100" />;
            case 'turso':
                return (
                    <div class='flex'>
                        <img src={Turso} alt='' class="mx-auto mt-5 scale-75 md:scale-100 pl-[5.75px]" />
                    </div>)
            case 'drizzle':
                return (
                    <div class='flex'>
                        <img src={Drizzle} alt='' class="mx-auto -mt-2 scale-60 md:scale-90 pl-[5.75px]" />
                    </div>)
            case 'solidjs':
                return <TbBrandSolidjs size={120} class="mx-auto mt-5 scale-75 md:scale-100" />;
            case 'svelte':
                return <SiSvelte size={120} class="mx-auto mt-5 scale-75 md:scale-100" />;
            case 'react':
                return <BiLogosReact size={120} class="mx-auto mt-5 scale-75 md:scale-100" />;
            case 'pgsql':
                return <SiPostgresql size={120} class="mx-auto mt-5 scale-75 md:scale-100" />;
            case 'tailwind':
                return <SiTailwindcss size={120} class="mx-auto mt-5 scale-75 md:scale-100" />;
            case 'github':
                return <SiGithub size={120} class="mx-auto mt-5 scale-75 md:scale-100" />;
            default:
                return <p class="mx-auto mt-5">Default Icon Placeholder</p>;
        }
    };
    return <>
        <div class="md:w-44 md:h-48 h-38 rounded-xl bg-sky-600 text-white transition hover:scale-110 hover:-translate-y-1 mx-auto">
            <div>
                {renderIcon()}
                <Show when={props.showName == true}>
                    <p class='font-semibold my-4'>{props.icon.toUpperCase()}</p>
                </Show>
            </div>
        </div>
    </>
}