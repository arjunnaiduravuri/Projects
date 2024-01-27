
let input = document.querySelector('input')
let btn   = document.querySelector('button')
let msg = document.querySelector('#message1')
let guess = document.querySelector('#guess')

var answer = 56

count = 0

btn.addEventListener('click', function func(){
    if (input.value == ''){
        alert('Enter a number')
    }
    else{
        if (input.value < 1 || input.value > 100){
            alert('Enter a number 1 - 100')
        }
    
        else if (input.value !== answer){
            guess.innerText = 'Wrong! Try again...'
            input.value = ''
            count += 1;
            msg.textContent = "No. of guesses: "+ count;
        }
        
        else if (input.value == answer){
            guess.innerText = 'Hooray! You Did it'
            input.value = ''
            count += 1;
            msg.textContent = "No. of guesses: "+ count;
        }
    }
})