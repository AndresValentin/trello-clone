const https = require('https');

//Funcion para obtener datos de la API de Pokemon
const fetchPokemon = () => {
    return new Promise((resolve,reject) => {
        https.get('https://pokeapi.co/api/v2/pokemon/pikachu')
    })
}

const pokemonName = 'Pikachu';
let pokemonLevel = 25;
let isCaptured = true; 

function presentPokemon = Mi pokemon es ${pokemonName} y esta en nivel ${pokemonLevel}
