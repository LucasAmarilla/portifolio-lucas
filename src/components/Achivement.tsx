import { FaSolidComputer, FaSolidEarthAmericas, FaSolidDatabase } from 'solid-icons/fa'
import { TbWorldWww, TbSearch } from 'solid-icons/tb'
import { IoWaterSharp } from 'solid-icons/io'


interface Achivement {
    title: string;
    school: string;
    year: string;
    icon?: string

}
export default function Achivement(props: Achivement) {
    const icon = () => {
        switch (props.icon) {
            case "computer":
                return <FaSolidComputer size={50} class='scale-75 md:scale-100' />
            case "world":
                return <FaSolidEarthAmericas size={50} class='scale-75 md:scale-100' />
            case "net":
                return <TbWorldWww size={50} class='scale-75 md:scale-100' />
            case "db":
                return <FaSolidDatabase size={50} class='scale-75 md:scale-100' />
            case "search":
                return <TbSearch size={50} class='scale-75 md:scale-100' />
            case "water":
                return <IoWaterSharp size={50} class='scale-75 md:scale-100' />
        }

    }

    return <>
        <div class=" flex items-center mt-6 ml-16">
            <div class="h-16 w-16 md:w-20 md:h-20 -ml-4 md:ml-0 text-white bg-sky-600 rounded-full flex items-center justify-center">
                {icon()}
            </div>
            <div class="ml-2 md:ml-4 text-left">
                <h2 class="text-md"><b>{props.title}</b> - {props.school}</h2>
                <h2>{props.year}</h2>
            </div>
        </div>
    </>
}