import { Component } from '@angular/core';
import { CardInfo, cardsInfo } from '../mooks/funcionamiento';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'info-cards',
    standalone: true,
    template: `
        <section class=" grid grid-cols-4 p-8">
            <div *ngFor="let card of cards" class="p-4">
                <h2 class="font-bold">{{ card.titulo }}</h2>
                <p>{{ card.contenido }}</p>
            </div>
        </section>
    `,
    imports: [CommonModule],
})
export class InfoCardsComponent {
    cards: CardInfo[] = cardsInfo;
}
