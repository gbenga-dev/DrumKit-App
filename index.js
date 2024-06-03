let drum = document.querySelectorAll('.drum');

for(let i = 0; i < drum.length; i++){
    document.querySelectorAll('.drum')[i].addEventListener('click', function(){
        let buttonInnerHTML = this.innerHTML
        makeSound(buttonInnerHTML);   
    })
}

document.addEventListener('keypress', function (e){
    makeSound(e.key)
})

let makeSound = (key) => {
    switch (key) {
        case 'w':
            let tom1 = new Audio('sounds/tom1.mp3')
            tom1.play();
            break;
        case 'a':
            let tom2 = new Audio('sounds/tom2.mp3')
            tom2.play();
            break;
        case 's':
            let tom3 = new Audio('sounds/tom3.mp3')
            tom3.play();
            break;
        case 'd':
            let snare = new Audio('sounds/snare.mp3')
            snare.play();
            break;
        case 'j':
            let kick = new Audio('sounds/kick-bass.mp3')
            kick.play();
            break;
    
        case 'k':
            let crash = new Audio('sounds/crash.mp3')
            crash.play();
            break;
    
        case 'l':
            let tom4 = new Audio('sounds/tom4.mp3')
            tom4.play();
            break;
    
        default:
            break;
    }
}


