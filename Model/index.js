// Variable

let openBtn = document.querySelector('#open-btn');
let closeBtn = document.querySelector('#close-btn');
let modelContainer = document.querySelector('#modal-container');

//Event Listeners

openBtn.addEventListener('click', function(){

    modelContainer.style.display = 'block';
});

closeBtn.addEventListener('click', function(){

    modelContainer.style.display = 'none';
});

window.addEventListener('click', function(e){
    if(e.target === modelContainer) {
        modelContainer.style.display = 'none';
    }
});

