const BASE_API_URL = 'https://pokeapi.co/api/v2/pokemon/'
const container = document.querySelector('.poke-container')

async function getData() {
    for (let i = 1; i <= 150; i++) {
        // fetching the pokemon data using axios async await 
        let url = `${BASE_API_URL}${i}`
        const {data} = await axios(url)
        console.log(data.types[0].type.name)

        // create a new div styled as a card and append it to the DOM
        const card = document.createElement('div')
        card.classList.add('pokemon')
        card.classList.add(`${data.types[0].type.name}`) 

        card.innerHTML = `
        <div class="img-container">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png">
        </div>
        <div class="info">
            <span class="number">#${data.id}</span>
            <h3 class="name">${data.name}</h3>
            <small class="type">Type: <span>${data.types[0].type.name}</span></small>
        </div>
        `



        container.appendChild(card)
    }
}

getData()


{/* <div class="pokemon" style="background-color: tomato;">
    <div class="img-container"></div>
    <div class="info">
        <span class="number">#001</span>
        <h3 class="name">Bulbasaur</h3>
        <small class="type">Type: <span>grass</span></small>
    </div>
</div> */}