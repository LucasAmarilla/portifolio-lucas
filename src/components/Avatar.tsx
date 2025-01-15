import photo from '../assets/photo.png'

export default function Avatar() {
    return <>
        <div class="rounded-full h-[20rem] w-[20rem] bg-blue-600 overflow-hidden my-auto border-4 border-sky-600 shadow-lg">
            <img src={photo} alt="" srcset="" class="h-full w-full object-cover" />
        </div>

    </>
}