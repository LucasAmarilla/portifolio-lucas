import { A } from "@solidjs/router";

export default function DownArrow() {
    return <>
        <div class="-mt-14 w-20 h-20 mx-auto absolute md:static right-0">
            <A href="#sexo" class="">
                <div class="bg-blue-500 rounded-full h-10 w-12 items-end flex transition-opacity duration-500">
                    <svg class="h-7 mx-auto animate-bounce " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M169.4 502.6c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 402.7 224 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 370.7L86.6 329.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128z" /></svg>
                </div>
            </A>
        </div>
    </>
}