var container = document.querySelector('.container');
var grid = document.querySelector('.btn-grid');

grid.addEventListener('click', function(){
    console.log('ok');
    container.classList.toggle('apha-grid');
});
