import { Component, Input } from '@angular/core';
import { InfoCardsComponent } from './card-info.component';

// Definir la interfaz
export interface DesaparecidoInfo {
    estado: string;
    nombre: string;
    codigo: string;
    alias: string;
    altura: string;
    peso: string;
    cronelib: string;
    ultimaUbicacion: string;
    contacto: string;
    descripcion: string;
}

@Component({
    selector: 'funcionamiento',
    standalone: true,
    imports: [InfoCardsComponent],
    template: `
        <div
            class="flex flex-col gap-2 border  border-gray-400 rounded-lg justify-center items-center p-4 overflow-hidden"
        >
            <h2 class=" text-3xl font-bold my-4">Descubre como funciona</h2>
            <article class="flex gap-2">
                <iframe
                    width="720"
                    height="480"
                    src="https://www.youtube.com/embed/jf1WzW4kXZY?si=kUxm4NYG0C770Aqm"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                ></iframe>
            </article>

            <info-cards></info-cards>
            <button
                class="bg-[#491FF4] text-white border border-[#491FF4] px-2 py-1 rounded-md"
            >
                Tengo información en el centro de ayuda -->
            </button>
        </div>
    `,
})
export class funcionamientoComponent {
    @Input() informacion!: DesaparecidoInfo;
}
