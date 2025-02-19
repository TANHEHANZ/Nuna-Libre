import { Component } from '@angular/core';
import { donacionInfo, DonacionInfo } from '../mooks/donar';

@Component({
    selector: 'app-donacion',
    standalone: true,
    template: `
        <div class="h-[32rem] relative  flex flex-col ">
            <img
                src="https://images.pexels.com/photos/8636647/pexels-photo-8636647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="backgraund-imagen"
                class="absolute -z-10 h-full object-cover object-top "
            />
            <div
                class="h-24 w-full flex justify-center items-center absolute bg-white top-0"
            >
                <h3 class=" border-b-4 border-[#4A23F4] font-bold text-4xl">
                    {{ donacion.titulo }}
                </h3>
            </div>
            <div
                class=" h-full  flex flex-col gap-2 justify-center items-center text-white text-2xl font-bold"
            >
                <h2 class="border-b-4 border-[#4A23F4]">
                    {{ donacion.subtitulo }}
                </h2>
                <p>{{ donacion.descripcion }}</p>
                <button
                    class=" bg-white text-black py-2 px-4 font-medium text-md rounded-lg"
                >
                    Donar -->
                </button>
            </div>
        </div>
    `,
})
export class DonacionComponent {
    donacion: DonacionInfo = donacionInfo;
}
