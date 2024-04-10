// --1--
const pokemons = document.querySelector('.pokemons');
fetch("https://majazocom.github.io/Data/pokemons.json")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((x) => {
      pokemons.innerHTML += `
        <h4 class="red">${x.name}</h4>
        `;
    });
  })
  .catch((err) => console.log(err));


//   --2--
const dogs = document.querySelector(".dogs");
const fetchDogs = async() => {
    const res = await fetch("https://majazocom.github.io/Data/dogs.json");
    const data = await res.json();
    data.map(x => {
        const html = document.createElement('h4');
        html.classList.add('blue');
        html.innerText = x.name;
        dogs.appendChild(html);
    })
}
fetchDogs();

// --3--
const books = document.querySelector(".books");
const fetchBooks = async () => {
    const res = await fetch("https://majazocom.github.io/Data/books.json");
    const data = await res.json();
    data.map (x => {
        if (x.pages < 500){
            let html = `
            <div class="book">
                <h4>Title: ${x.title}</h4>
                <h5>Author: ${x.author}</h5>
                <p>Genre: ${x.genre}</p>
                <span>Pages: ${x.pages}</span>
            </div>
            `;
            books.innerHTML += html;
        }
    })
}
fetchBooks();

// --4--
const visitorAttending = document.querySelector('.visitor-attending');
const visitorAttendingAllergy = document.querySelector('.visitor-attending-allergy');
fetch("https://majazocom.github.io/Data/attendees.json")
.then(res => res.json())
.then(data => {
    data.map(x => {
        if (x.attending){
            let html = document.createElement('h4');
            html.textContent = x.name;
            visitorAttending.appendChild(html);
        }  
        
        if (x.attending && x.allergies.length > 0){
            let div = document.createElement('div');
            div.classList.add('green');
            visitorAttendingAllergy.appendChild(div);
            let html = document.createElement("h4");
            html.textContent = x.name;
            div.appendChild(html);
            x.allergies.forEach (x => {
                let p = document.createElement('p');
                p.textContent = x;
                div.appendChild(p);
            })
        }
    })
});
