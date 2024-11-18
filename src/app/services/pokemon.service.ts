import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  // Obtener lista de Pokémon
  getPokemons(limit: number): Observable<any> {
    const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}`;
    return this.http.get<any>(url);
  }

  getPokemonDetails(url: string): Observable<any> {
    return this.http.get<any>(url);
  }
}
