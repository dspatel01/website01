const bar = document.querySelector(".bar")
const ul = document.querySelector("ul")

bar.addEventListener('click', () => {
    bar.classList.toggle("active")
    ul.classList.toggle("active")
})

document.querySelectorAll("a").forEach(n => n.addEventListener('click', () => {
    bar.classList.remove("active")
    ul.classList.remove("active")
}))