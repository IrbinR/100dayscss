const menu = document.querySelector('.menu')
const elementsClass = document.querySelectorAll('.menu__large')
let estado = 0
menu.addEventListener('click', () => {
    if(elementsClass[0].classList.contains('animation_top')) {
        elementsClass[0].classList.replace('animation_top','reverser_animation_top')
        elementsClass[1].classList.replace('animation_middle','reverser_animation_middle')
        elementsClass[2].classList.replace('animation_bottom','reverser_animation_bottom')

        estado = 1
    }
    else {
        if(estado === 1) {
            elementsClass[0].classList.remove('reverser_animation_top')
            elementsClass[1].classList.remove('reverser_animation_middle')
            elementsClass[2].classList.remove('reverser_animation_bottom')
            estado = 0
        }

        elementsClass[0].classList.add('animation_top')
        elementsClass[1].classList.add('animation_middle')
        elementsClass[2].classList.add('animation_bottom')
    }
})
