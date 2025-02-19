import { Component } from '@angular/core';
import { seccionInfo, SeccionInfo } from '../mooks/empezar';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-seccion',
    standalone: true,
    imports: [CommonModule],
    template: `
        <div class="flex flex-col gap-1 min-h-20 h-screen">
            <h1
                class=" w-full p-4 text-3xl text-center bg-[#9A61F0] text-white font-bold"
            >
                {{ seccion.encabezado }}
            </h1>
            <article class="flex gap-4 bg-[#7E4EC5] h-full">
                <div class="w-1/2 flex justify-center items-center ">
                    <img
                        src="https://www.ctxdetectives.com/wp-content/uploads/2019/02/detectives-busqueda-de-personas.jpg"
                        alt="personas busncando"
                        class="w-[90%]"
                    />
                </div>
                <section
                    class="flex flex-col gap-2 items-center justify-center h-full p-8 text-white"
                >
                    <ul>
                        <li
                            *ngFor="let paso of seccion.pasos"
                            class="list-disc"
                        >
                            {{ paso }}
                        </li>
                    </ul>
                    <button
                        class="self-end bg-white text-black py-2 px-4 rounded-lg"
                    >
                        EMPEZAR A BUSCAR
                    </button>
                </section>
            </article>
            <p
                class=" w-full p-4 text-3xl text-center bg-[#9A61F0] text-white font-bold"
            >
                {{ seccion.pieDePagina }}
            </p>
        </div>
    `,
})
export class SeccionComponent {
    seccion: SeccionInfo = seccionInfo;
}
