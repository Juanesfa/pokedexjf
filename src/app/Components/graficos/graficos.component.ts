/* app/src/Components/graficos/graficos.component.ts */
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-grafico',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './graficos.component.html',
  styleUrls: ['./graficos.component.css']
})
export class GraficoComponent {
  @Input() id: string = "#000";
  @Input() nombrePokemon: string = "UNKNOWN";
  @Input() tipoPokemon: string = "NORMAL";
  @Input() vidaPokemon: number = 0;
  @Input() ataquePokemon: number = 0;
  @Input() defensaPokemon: number = 0;
}