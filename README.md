# Consumo de PokeAPI

Este proyecto utiliza Ionic para consumir datos de la PokeAPI, permitiendo listar y mostrar detalles de Pokémon.

## Pasos para Reproducir el Proyecto

### 1. Clonación del Repositorio
Repositorio base: [pokeapp](https://github.com/jzaldumbide/pokeapp/blob/main/README.md#consumo-de-apis-con-ionic)

### 2. Instalación de Dependencias
Instalar las librerías necesarias:
npm install @angular/common @angular/http --force

### 3. Ejecución del Proyecto
Iniciar el servidor de desarrollo:
ionic serve

### 4. Modificaciones Realizadas

#### Barra de Búsqueda
- Se agregó una barra de búsqueda en el archivo pokemon-list.page.html.
- ![{C1C6C5AA-BCA8-4153-9AF9-C0AD2F964333}](https://github.com/user-attachments/assets/bc05cad9-e4e9-40cc-9e9e-ec4d5ae0213d)

- Se creó una función inicial de búsqueda en el archivo pokemon-list.page.ts.
![{79BCA57E-3D3E-4EF5-97BE-CE07AAC644FE}](https://github.com/user-attachments/assets/03c810a4-1ee8-4f1a-954b-0cd311768df3)

#### Obtención de Detalles de Pokémon
- Uso del método getPokemonDetails del archivo pokemon.service.ts.
- ![{FC898ACC-EB58-4C43-9B50-40A4BDAACEBB}](https://github.com/user-attachments/assets/ce7625f0-ef5d-4dd9-aa7d-03d6dd732659)

- Creación de variables para almacenar datos del Pokémon seleccionado y manejar errores en pokemon-list.page.ts.
- ![{11155F8A-B1AB-487E-8A43-164750DF59DD}](https://github.com/user-attachments/assets/0fe289c7-ec23-4f51-a202-224a436bcf13)

- Modificación de la función de búsqueda para consumir getPokemonDetails y manejar errores.
- ![{691818C6-9A0D-49A5-9F0C-B148FBBEAB92}](https://github.com/user-attachments/assets/1df368b1-1ed2-4d60-a74d-1ff584f64c6b)


#### Visualización en el HTML
- Se añadió un <div> en pokemon-list.page.html para mostrar el nombre, altura, peso, habilidades y fotografía del Pokémon seleccionado.
- Se manejaron mensajes de error en caso de búsquedas sin resultados.
- ![{E7E3A722-B793-4747-ABB7-E5DD0A4A2C4A}](https://github.com/user-attachments/assets/7f3670a5-ab41-460b-b9c2-9e3e037caacb)


## Tecnologías Utilizadas
- *Ionic Framework*: Framework principal para la construcción del proyecto.