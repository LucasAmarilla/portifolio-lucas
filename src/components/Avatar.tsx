import curintia from '../assets/curintia.png'

export default function Avatar() {
    return <>
        <div class="rounded-full h-[20rem] w-[20rem] bg-red-600 overflow-hidden m-auto">
            <img src={curintia} alt="" srcset="" class='h-full w-full object-cover' />
        </div>
    </>
}