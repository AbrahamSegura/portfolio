const $ = selector => document.querySelector(selector)
const $$ = selector => document.querySelectorAll(selector)

const line = $('.line');
line.addEventListener('click', () => $('.nav-var').classList.toggle('show'))

const item = $$('.nav-list-item')
const About = $('.About')
const Proyects = $('.Proyects')
const Studies = $('.Studies')
const Exp = $('.Exp')

const names = ["About", "Proyects", "Studies", "Exp"]

const listOfNames = {
    About,
    Proyects,
    Studies,
    Exp
}
item.forEach(i => i.addEventListener('click', e => {
    const elem = e.srcElement.childNodes[0].data
    console.log(elem);
    names.map(el => {
        if (el === elem) {
            const top = listOfNames[elem].offsetTop
            console.log(top);
            scroll({
                top,
                left: 0,
                behavior: 'smooth'
            })
        }
    })
}))
