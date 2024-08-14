const question = document.querySelector(".question")
const gif = document.querySelector(".gif")
const yesBtn = document.querySelector(".yes-btn")
const noBtn = document.querySelector(".no-btn")

yesBtn.addEventListener("click", ()=> {
    question.innerHTML = "Sl O Nha";
    gif.src="https://s3.getstickerpack.com/storage/uploads/sticker-pack/ami-fat-cat/sticker_23.gif?735a11c917b7eb4234477c5a58557bea"
    })

    noBtn.addEventListener("mouseover",()=> {
        const noBtnRect = noBtn.getBoundingClientRect();
        const maxX = window.innerWidth - noBtnRect.width;
        const maxY = window.innerHeight - noBtnRect.height
        
        const randomX = Math.floor(Math.random() * maxX)
        const randomY =  Math.floor(Math.random() * maxY)

        noBtn.style.left = randomX + "px";
        noBtn.style.top = randomY + "px"
    })