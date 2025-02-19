import { Component, Input } from '@angular/core';

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
    selector: 'app-desaparecido-card',
    standalone: true,
    template: `
        <div
            class="w-full flex flex-col gap-2 border  border-gray-400 rounded-lg justify-center items-center p-4"
        >
            <article class="flex gap-2">
                <img
                    src="https://static.vecteezy.com/system/resources/previews/006/489/833/non_2x/missing-person-glyph-icon-vector.jpg"
                    alt="playgraund-persona-desaparecida"
                    class="w-1/2"
                />
                <section class="flex flex-col justify-start items-start">
                    <h2
                        class="bg-[#9A61F0] text-white text-xs px-2 py-1 rounded-lg"
                    >
                        {{ informacion.estado }}
                    </h2>
                    <p class="text-2xl">{{ informacion.nombre }}</p>
                    <p><strong>Código:</strong> {{ informacion.codigo }}</p>
                    <p><strong>Alias:</strong> {{ informacion.alias }}</p>
                    <p><strong>Altura:</strong> {{ informacion.altura }}</p>
                    <p><strong>Peso:</strong> {{ informacion.peso }}</p>
                    <p><strong>Cronelib:</strong> {{ informacion.cronelib }}</p>
                    <p>
                        <strong>Última Ubicación:</strong>
                        {{ informacion.ultimaUbicacion }}
                    </p>
                    <p><strong>Contacto:</strong> {{ informacion.contacto }}</p>
                </section>
            </article>
            <p>{{ informacion.descripcion }}</p>
            <button
                class="text-[#9A61F0] border border-[#9A61F0] px-2 py-1 rounded-md"
            >
                Tengo información -->
            </button>
        </div>
    `,
})
export class DesaparecidoCardComponent {
    @Input() informacion!: DesaparecidoInfo;
}
