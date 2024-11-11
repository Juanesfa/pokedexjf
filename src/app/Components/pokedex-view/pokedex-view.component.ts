/* app/src/Components/pokedex-view/pokedex-view.component.ts */
import { Component } from '@angular/core';
import { PokedexComponent } from '../pokedex/pokedex.component';
import { GraficoComponent } from '../graficos/graficos.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pokedex-view',
  standalone: true,
  imports: [CommonModule, PokedexComponent, GraficoComponent],
  templateUrl: './pokedex-view.component.html',
  styleUrls: ['./pokedex-view.component.css']
})
export class PokedexViewComponent {
  pokemonId = 1;
  pokemonImagen = '';
  pokemonData: any = {};

  constructor() {
    this.obtenerDatosPokemon(this.pokemonId);
  }

  /**
   * Cambia el Pokémon actual.
   * Si el valor recibido es -1 o +1, realiza navegación a anterior o siguiente.
   * Si el valor está entre 1 y 898, lo trata como ID específico para un Pokémon aleatorio.
   * 
   * @param cambio Número que indica el cambio en ID (anterior, siguiente, o aleatorio)
   */
  changePokemon(cambio: number): void {
    if (cambio === -1 || cambio === 1) {
      // Navegación anterior o siguiente
      this.pokemonId = Math.max(1, Math.min(this.pokemonId + cambio, 898));
    } else if (cambio > 0 && cambio <= 898) {
      // ID específico para el caso aleatorio
      this.pokemonId = cambio;
    }
    this.obtenerDatosPokemon(this.pokemonId);
  }

  private obtenerDatosPokemon(id: number): void {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then(response => response.ok ? response.json() : Promise.reject('Network response was not ok'))
      .then(data => this.asignarDatosPokemon(data))
      .catch(error => console.error('No se pudo obtener los datos del pokemon:', error));
  }

  private asignarDatosPokemon(data: any): void {
    this.pokemonData = {
      id: `#${data.id.toString().padStart(3, '0')}`,
      nombre: data.name.charAt(0).toUpperCase() + data.name.slice(1),
      tipo: data.types.map((type: any) => type.type.name).join(', '),
      vida: data.stats[0].base_stat,
      ataque: data.stats[1].base_stat,
      defensa: data.stats[2].base_stat,
    };
    this.pokemonImagen = data.sprites.front_default;
  }
}