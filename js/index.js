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
  const elem = e.srcElement.childNodes[0].data;
  names.forEach(el => {
    if (el === elem) {
      const top = listOfNames[elem].offsetTop
      scroll({
        top,
        left: 0,
        behavior: 'smooth'
      })
    }
  })
}))

const hiddenCharacters = $$('#hidden div')
const hiddenContainer = $('#hidden')
let hiddenCharactersWidth = Array(0)

hiddenCharacters.forEach(character => {
  const characterWidth = character.clientWidth
  hiddenCharactersWidth = [...hiddenCharactersWidth, characterWidth]
})

hiddenCharactersWidth.unshift(0)
hiddenCharactersWidth.push(0)

let index = 0;
let totalWidth = 1
const speed = 500;

function type() {
  if(index === hiddenCharactersWidth.length){
    reverseType()
  }else if (index < hiddenCharactersWidth.length) {
    totalWidth += hiddenCharactersWidth[index]
    hiddenContainer.style.width = `${totalWidth}px`
    index++;
    setTimeout(type, speed);
  }
}

function reverseType(){
  if(index === 0){
    type()
  }else if (index > 0) {
    totalWidth -= hiddenCharactersWidth[index - 1 ]
    hiddenContainer.style.width = `${totalWidth}px`
    index--;
    setTimeout(reverseType, speed);
  }

}

type();