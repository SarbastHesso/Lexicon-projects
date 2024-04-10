const card = document.querySelectorAll('.card');


card.forEach((item, index) => {
    let btn =  item.querySelector('button');
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        let image = item.querySelector("img");
        if (image) {
          let copiedImage = new Image();
          copiedImage.src = image.src;
          copiedImage.alt = image.alt;
          document.body.appendChild(copiedImage);
          copiedImage.classList.add("cart-image");
        } else {
          console.log("Image not found!");
        }
    })
})

