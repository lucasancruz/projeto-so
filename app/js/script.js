let pokedex;
let pokemons;

const getPokemons = async () => {
    const response = await fetch('http://localhost:3000/pokemon')
    pokemons = await response.json()

    return pokemons
}

const handleChange = ({ value }) => {
    const filteredPokemons = pokemons
        .filter((pokemon) => pokemon.name.includes(value.toLowerCase()))

    buildPokemonCards(filteredPokemons)
}

const buildPokemonCards = (pokemons) => {
    pokedex.innerHTML = ''

    pokemons.forEach(pokemon => {
        const card = `
                <div class="pokemon-card" style="background-color: var(--${pokemon.type}-type);">
                    <div class="flex w-full justify-between items-center">
                        <h1 class="pokemon-name">${capitalize(pokemon.name)}</h1>
    
                        <p class="pokemon-id">#${String(pokemon.id).padStart(3, '0')}</p>
                    </div>
    
                    <div class="pokemon-type">
                        ${capitalize(pokemon.type)}
                    </div>
    
                    <img class="pokeball" src="images/pokeball.png" alt="Pokeball">
                    <img class="pokemon-image" src="${pokemon.image}" alt="${capitalize(pokemon.name)}">
                </div>
            `

        pokedex.insertAdjacentHTML('beforeend', card)
    })
}

const start = async () => {
    const pokemons = await getPokemons()
    
    window.addEventListener('load', (e) => {
        pokedex = document.getElementById('pokedex')
        buildPokemonCards(pokemons)
    })
}

start()
