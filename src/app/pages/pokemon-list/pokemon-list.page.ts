import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.page.html',
  styleUrls: ['./pokemon-list.page.scss'],
})
export class PokemonListPage implements OnInit {
  pokemons: any[] = [];
  filteredPokemons: any[] = [];
  loading = false;
  searchText: string = '';

  constructor(
    private pokemonService: PokemonService,
    private alertController: AlertController
  ) { }

  ngOnInit() {
    this.fetchPokemons();  // Obtener los Pokémon al inicio
  }

  fetchPokemons() {
    this.loading = true;

    this.pokemonService.getPokemons(50).subscribe({
      next: (response) => {
        this.pokemons = [];
        this.filteredPokemons = [];

        response.results.forEach((pokemon: any) => {
          this.pokemonService.getPokemonDetails(pokemon.url).subscribe({
            next: (details: any) => {
              pokemon.imageUrl = details.sprites.front_default;
              pokemon.types = details.types.map((type: any) => type.type.name).join(', ');
              pokemon.abilities = details.abilities.map((ability: any) => ability.ability.name).join(', ');
              pokemon.habitat = details.habitat ? details.habitat.name : 'Unknown';  // Verifica si tiene hábitat

              this.pokemons.push(pokemon);
              this.filteredPokemons = [...this.pokemons];
            },
            error: (error) => {
              console.error('Error fetching Pokémon details:', error);
            }
          });
        });

        this.loading = false;
      },
      error: (error) => {
        console.error('Error fetching Pokémon list:', error);
        this.loading = false;
      }
    });
  }

  // Función para filtrar Pokémon según la búsqueda
  filterPokemons() {
    if (!this.searchText) {
      this.filteredPokemons = [...this.pokemons];
    } else {
      this.filteredPokemons = this.pokemons.filter(pokemon =>
        pokemon.name.toLowerCase().includes(this.searchText.toLowerCase())
      );
    }
  }

  // Función para mostrar los detalles del Pokémon en un Alert
  async showPokemonDetails(pokemon: any) {
    const alert = await this.alertController.create({
      header: `${pokemon.name} Detalles`,  // Nombre del Pokémon
      message: `
        Tipo:${pokemon.types}
        Habilidades:${pokemon.abilities}
      `,
      buttons: ['OK']
    });

    await alert.present();  // Presenta la alerta
  }
}
