// Code here!

// --1--
const artOneName = document.querySelector('.art-1>h3');
artOneName.innerText = 'Potato';

// --2--
const homeLink = document.querySelectorAll('header nav a');
homeLink[0].innerText = 'Start';

// --3--
homeLink[2].innerText = "Mail Us";

// --4--
const artTwoInfo = document.querySelector('.art-2>p');
artTwoInfo.innerText = 'This is a new information about the second element: Sinus Hoodie - Fire by using javascript';

// --5--
const artTwoBtn = document.querySelector('.art-2>button');
artTwoBtn.style.backgroundColor = "rgb(244, 182, 10)";
artTwoBtn.style.color = '#000000';
artTwoBtn.innerText = 'Add';

// --6--
const artTwoFigure = document.querySelector('.art-2>figure');
artTwoFigure.style.backgroundColor = "#000000";

// --7--
const addressArticle = document.querySelectorAll('footer>section>article')[1];
addressArticle.innerHTML = `
    <h3>Where we are</h3>
    <p>Sinus skateboards <br>
    Nyvägen 99 <br>
    999 99, Stockholm</p>
`;

// --8--
const p = document.querySelectorAll('p');
p.forEach (e => {
    e.style.color = "red";
})

// --9--
const btn = document.querySelectorAll('button');
btn.forEach(e => {
    e.innerText = 'Add to cart'
})

// --10--
homeLink[0].classList.add('active');

// --11--
const logoImg = document.querySelector('header img.logo');
logoImg.classList.remove('logo');

// --12--
const about = document.createElement('a');
about.innerText = 'About Us';
homeLink[2].insertAdjacentElement('beforeend', about);

// --13--
let newProduct = `
    <article>
        <figure><img src="img/hoodie-Forrest.png" alt="hoodie"></figure>
        <h2>Sinus Hoodie</h2>
        <h3>Forrest</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, dolores.</p>
        <button>Add to cart</button>
    </article>
`;
const main = document.querySelector('main');
main.innerHTML += newProduct

// --14--
logoImg.addEventListener('click', e => {
    e.preventDefault();
    console.log('found you!');
})

// --15--
const articles = document.querySelectorAll('main article');
console.log(articles);
for (let i = 0; i < articles.length; i++){
    let article = articles[i];
    article.addEventListener('click', e => {
        let productName = article.querySelector('h3');
        console.log(`Hi, Im article ${productName.innerText}`);
    })
}