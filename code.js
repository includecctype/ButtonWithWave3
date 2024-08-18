const waver = document.querySelector('p')

waver.addEventListener('click', function(i){
    let x = i.clientX - i.target.offsetLeft
    let y = i.clientY - i.target.offsetTop

    let waving = document.createElement("span")
    waving.style.left = x + "px"
    waving.style.top = y + "px"

    this.appendChild(waving)

    setTimeout(() => {
        waving.remove()
    }, 1000)
})