import { BiLogosReact, BiLogosJava } from 'solid-icons/bi'
import { SiPostgresql, SiPhp, SiLaravel, SiSpring, SiSvelte, SiPython, SiJavascript, SiTailwindcss, SiGithub, SiUnity, SiHtml5, SiCss3, SiBootstrap, SiMysql, SiJquery, SiApachetomcat, SiCsharp, SiMicrosoftsqlserver, SiPowerbi, SiPowerautomate, SiPowerapps } from 'solid-icons/si'
import { TbBrandSolidjs } from 'solid-icons/tb'
import Turso from '../assets/turso2.png';
import Drizzle from '../assets/drizzle.png';

import { Show } from 'solid-js';

export default function Tool(props: { icon: string, showName: boolean, size: string }) {
    const renderIcon = () => {
        switch (props.icon) {
            case 'php':
                return <SiPhp size={props.size} class="mx-auto mt-5 scale-75 md:scale-100" />;
            case 'javascript':
                return <SiJavascript size={props.size} class="mx-auto mt-5 scale-75 md:scale-100" />;
            case 'python':
                return <SiPython size={props.size} class="mx-auto mt-5 scale-75 md:scale-100" />;
            case 'java':
                return <BiLogosJava size={props.size} class="mx-auto mt-5 scale-75 md:scale-100" />;
            case 'spring':
                return <SiSpring size={props.size} class="mx-auto mt-5 scale-75 md:scale-100" />;
            case 'laravel':
                return <SiLaravel size={props.size} class="mx-auto mt-5 scale-75 md:scale-100" />;
            case 'turso':
                return (
                    <div class='flex'>
                        <img src={Turso} alt='' class="mx-auto mt-5 scale-75 md:scale-100 pl-[5.75px]" />
                    </div>)
            case 'turso-mini':
                return (
                    <div class='flex'>
                        <img src={Turso} alt='' class="mt-5 h-8" />
                    </div>)
            case 'drizzle':
                return (
                    <div class='flex'>
                        <img src={Drizzle} alt='' class="mx-auto -mt-2 scale-60 md:scale-90 pl-[5.75px]" />
                    </div>)
            case 'drizzle-mini':
                return (
                    <div class='flex'>
                        <img src={Drizzle} alt='' class="mt-5 h-8" />
                    </div>)
            case 'solidjs':
                return <TbBrandSolidjs size={props.size} class="mx-auto mt-5 scale-75 md:scale-100" />;
            case 'svelte':
                return <SiSvelte size={props.size} class="mx-auto mt-5 scale-75 md:scale-100" />;
            case 'react':
                return <BiLogosReact size={props.size} class="mx-auto mt-5 scale-75 md:scale-100" />;
            case 'pgsql':
                return <SiPostgresql size={props.size} class="mx-auto mt-5 scale-75 md:scale-100" />;
            case 'tailwind':
                return <SiTailwindcss size={props.size} class="mx-auto mt-5 scale-75 md:scale-100" />;
            case 'github':
                return <SiGithub size={props.size} class="mx-auto mt-5 scale-75 md:scale-100" />;
            case 'unity':
                return <SiUnity size={props.size} class="mx-auto mt-5 scale-75 md:scale-100" />;
            case 'html':
                return <SiHtml5 size={props.size} class="mx-auto mt-5 scale-75 md:scale-100" />;
            case 'css':
                return <SiCss3 size={props.size} class="mx-auto mt-5 scale-75 md:scale-100" />;
            case 'js':
                return <SiJavascript size={props.size} class="mx-auto mt-5 scale-75 md:scale-100" />;
            case 'bootstrap':
                return <SiBootstrap size={props.size} class="mx-auto mt-5 scale-75 md:scale-100" />;
            case 'mysql':
                return <SiMysql size={props.size} class="mx-auto mt-5 scale-75 md:scale-100" />;
            case 'jquery':
                return <SiJquery size={props.size} class="mx-auto mt-5 scale-75 md:scale-100" />;
            case 'tomcat':
                return <SiApachetomcat size={props.size} class="mx-auto mt-5 scale-75 md:scale-100" />;
            case 'c#':
                return <SiCsharp size={props.size} class="mx-auto mt-5 scale-75 md:scale-100" />;
            case 'sql-server':
                return <SiMicrosoftsqlserver size={props.size} class="mx-auto mt-5 scale-75 md:scale-100" />;
            case 'python':
                return <SiPython size={props.size} class="mx-auto mt-5 scale-75 md:scale-100" />;
            case 'power bi':
                return <SiPowerbi size={props.size} class="mx-auto mt-5 scale-75 md:scale-100" />;
            case 'power automate':
                return <SiPowerautomate size={props.size} class="mx-auto mt-5 scale-75 md:scale-100" />;
            case 'power apps':
                return <SiPowerapps size={props.size} class="mx-auto mt-5 scale-75 md:scale-100" />;

            default:
                return <p class="mx-auto mt-5">Default Icon Placeholder</p>;
        }
    };
    return <>
        <div>
            {renderIcon()}
            <Show when={props.showName == true}>
                <p class='font-semibold my-4'>{props.icon.toUpperCase()}</p>
            </Show>
        </div>
    </>
}