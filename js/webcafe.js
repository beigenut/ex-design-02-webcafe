var container = document.querySelector('.container');
var grid = document.querySelector('.btn-grid');

grid.addEventListener('click', function(){
    console.log('ok');
    container.classList.toggle('apha-grid');
});

// $ : jquery || doc : html {body} || ready : 문서 준비 객체 (func.)
$(document).ready(function(){
    var video = $('.news-video');

    video.on('mouseover focusin', function(){
        console.log('ok');
        $(this).attr('autoplay','autoplay');
    });
    video.on('mouseout focusout', function(){
        console.log('out');
        $(this).attr('autoplay','false');
    });
}); 

// native method 
var video = document.querySelector('.news-video');

video.addEventListener('mouseenter focusin', function(){
    this.setAttribute('autoplay');
});
video.addEventListener('mouseleave focusout', function(){
    this.removeAttribute('autoplay');
});