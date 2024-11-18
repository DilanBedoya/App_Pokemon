# Laboratorio 
# Consumo de API's con ionic

El presente repo contiene una aplicación que consume el API de https://pokeapi.co/, con el endpoint [https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0](https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0)

La actividad por realizar es generar una aplicación que me permita buscar y mostrar Pokémons pero con todas sus características, incluida su foto, para lo cual puede consumir el endpoint: https://pokeapi.co/api/v2/pokemon/ditto , en este caso "ditto" es el nombre del Pokémon a mostrar.

Entregable: en el aula virtual deberá subir su repositorio de github donde debe detallar el proceso en el readme y adjuntar capturas de la app en ejecución. Pueden trabajar hasta 3 personas. Todos deben subir su repositorio.


----
ionic start pokeapp blank --type=angular
cd pokeapp

npm install @angular/common @angular/http, puede que deba usar --force

ionic generate service services/pokemon

ionic generate page pages/pokemon-list

