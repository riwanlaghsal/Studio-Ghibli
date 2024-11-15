document.addEventListener('DOMContentLoaded', () => {
    fetchFilms();
})

async function fetchFilms() {
    try {
        const response = await fetch("https://ghibliapi.dev/films");
        const films = await response.json();
        displayFilms(films);
    }
    catch (error) {
        console.log(error);
    }
}

async function displayFilms(films) {
    const filmsContainer = document.getElementById('film-container');

    films.forEach(film => {
        const rechercheGoogle = `https://www.google.fr/search?q=${film.title}`
        const filmElement = document.createElement('div');
        filmElement.classList.add("col-md-4", "col-lg-3", "d-flex", "align-items-stretch");

        filmElement.innerHTML =`
            <div class="card" style="width: 18rem;">
                <img src="${film.image}" class="card-img-top" alt="${film.title}">
                <div class="card-body">
                    <h5 class="card-title">${film.title}</h5>
                    <h6 class="original-title">${film.original_title}</h6>
                    <p class="card-description">${film.description.substring(0, 100)}...</p>
                    <p class="card-director"><strong>Director : </strong>${film.director}</p>
                    <p class="card-release"><strong>Release date : </strong>${film.release_date}</p>
                    <a href="${rechercheGoogle}" class="btn btn-primary" target="_blank">Learn more</a>
                </div>
            </div>
            `;
        filmsContainer.appendChild(filmElement);
    })
}