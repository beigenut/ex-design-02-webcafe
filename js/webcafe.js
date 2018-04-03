$(document).ready(function() {
    var container=$('.container');
    var grid = $('.btn-grid');
    var video = $('.news-video');
    // video.get(0).volume = 0; html 에 muted 안 넣고 js 에서 선언
    
    /* mouseover 와 (pointer)focusin 두 상황 모두 적용되도록 .on 이 for 생성 */
    video.on('mouseover focusin', function() {
        /* this.play() - 여러개 중에서 머우스오버가 일어난 비디오만 || $(this).play() - video 안에 선언된 모든 비디오에 적용 */     
        this.volume = 1.0;
        this.play();
        $(this).prop('muted', false);
    });
    video.on('mouseleave focusout', function() {
        this.pause();
        this.volume = 0;
    });
    grid.click(function() {
       container.toggleClass('apha-grid');
    });
});

// var container = document.querySelector('.container');
// var grid = document.querySelector('.btn-grid');

// grid.addEventListener('click', function(){
//     console.log('ok');
//     container.classList.toggle('apha-grid');
// });

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