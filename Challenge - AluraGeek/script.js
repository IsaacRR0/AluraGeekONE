// Espera a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    fetchCharacters(); // Llama a la función para obtener personajes
});

// Función para obtener los personajes de la API de Rick and Morty
function fetchCharacters() {
    fetch('https://rickandmortyapi.com/api/character')
        .then(response => {
            if (!response.ok) {
                throw new Error('Error en la solicitud');
            }
            return response.json();
        })
        .then(data => {
            displayCharacters(data.results); // Muestra los personajes
        })
        .catch(error => {
            console.error('Error al obtener personajes:', error);
        });
}

// Función para mostrar los personajes en la página
function displayCharacters(characters) {
    const characterList = document.getElementById('product-list');
    characterList.innerHTML = ''; // Limpia la lista antes de mostrar nuevos personajes

    characters.forEach(character => {
        const characterDiv = document.createElement('div');
        characterDiv.classList.add('product'); // Cambia a 'product' para el estilo
        characterDiv.innerHTML = `
            <img src="${character.image}" alt="${character.name}">
            <h2>${character.name}</h2>
            <p>Especie: ${character.species}</p>
            <p>Estado: ${character.status}</p>
            <p>Origen: ${character.origin.name}</p>
            <div class="product-description">
                <strong>Descripción:</strong>
                <p>
                    Expansión completamente autojugable.<br>
                    Juego de cartas donde podremos controlar personajes, cerrar dimensiones o aniquilar al estilo Rick para convertirte en el más poderoso.<br>
                    Diferentes reglas de 100 Días, pero con la misma diversión.<br>
                    No es necesario, pero puedes añadirlo a tu juego 100 Días de Rick y Morty para que sea más divertido.
                </p>
            </div>
        `;
        characterList.appendChild(characterDiv); // Añade el personaje a la lista
    });
}
