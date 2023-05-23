
const imageContainer = document.querySelectorAll('div.expand')

imageContainer.forEach(image => {
    image.addEventListener('click',() => {
        removeActiveClasses()
        setTimeout(() => {
            image.children[0].classList.add('text-animation')
        },400)
        image.classList.add("active")
    })
})

function removeActiveClasses() {
    imageContainer.forEach(image => {
        image.classList.remove("active")
        setTimeout(() => {
            image.children[0].classList.remove('text-animation')
        },200)
    })
}
