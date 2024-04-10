const card = document.querySelectorAll('.card');


card.forEach ((item, index) => {
    if (item){
        let readBtn = item.querySelector("#read-btn");
        let backBtn = item.querySelector("#back-btn");
        let front = item.querySelector(".front");
        let back = item.querySelector(".back");
        let addBtn = item.querySelector("#add_btn");


            readBtn.addEventListener("click", (e) => {
              e.preventDefault();
              front.style.animation = "twirl .2s ease-in forwards";
              back.style.animation = "twirl .2s .2s ease-out forwards reverse";
            });

            backBtn.addEventListener("click", (e) => {
              e.preventDefault();
              front.style.animation = "twirl .2s ease-out forwards reverse";
              back.style.animation = "twirl .2s ease-in forwards";
            });

            addBtn.addEventListener('click', (e) => {
                e.preventDefault();
                let image = item.querySelector('img');
                let copiedImg = new Image();
                copiedImg.src = image.src ;
                copiedImg.alt = image.alt;
                document.body.appendChild(copiedImg);
                copiedImg.classList.add("img-to-basket");
            })

    }

})