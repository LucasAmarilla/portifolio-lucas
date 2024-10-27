import photo from '../assets/photo.png'

export default function Avatar() {
    return <>
        <div class="rounded-full h-[20rem] w-[20rem] bg-red-600 overflow-hidden m-auto">
            <img src={photo} alt="" srcset="" class='h-full w-full object-cover' />
        </div>
    </>
}