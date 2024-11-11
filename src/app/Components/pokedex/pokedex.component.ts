/* app/src/Components/pokedex/pokedex.component.ts */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pokedex',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent {
  @Input() imageURL: string = "";
  @Output() pokemonId: EventEmitter<number> = new EventEmitter();

  /**
   * Emite el evento para mostrar el Pokémon anterior.
   */
  previousPokemon(): void {
    this.pokemonId.emit(-1);
  }

  /**
   * Emite el evento para mostrar el Pokémon siguiente.
   */
  nextPokemon(): void {
    this.pokemonId.emit(1);
  }

  /**
   * Emite un evento con un ID aleatorio entre 1 y 898 para mostrar un Pokémon aleatorio.
   */
  randomPokemon(): void {
    const randomId = Math.floor(Math.random() * 898) + 1;
    this.pokemonId.emit(randomId);
  }
}